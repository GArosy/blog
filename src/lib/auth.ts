import NextAuth, { NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import prisma from '@/lib/prisma'

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/auth/login',
    signOut: '/auth/logout',
  },
  providers: [
    GithubProvider({
      clientId: `${process.env.GITHUB_ID}`,
      clientSecret: `${process.env.GITHUB_SECRET}`,
      httpOptions: {
        timeout: 50000,
      },
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET
    // }),
  ],
  callbacks: {
    async jwt({ token }) {
      return token
    },
    async session({ session, token }: any) {
      // upsert 更新或插入
      // 确保了数据库中的用户信息与认证提供者（GitHub）保持同步，并在每次用户登录时更新
      await prisma.user.upsert({
        // 查找条件为token.sub
        where: {
          sub: token.sub,
        },
        // 如果找到用户，则更新以下字段
        update: {
          username: token.name,
          avatar: token.picture,
          email: token.email,
        },
        // 如果没有找到用户，则创建新用户
        create: {
          sub: token.sub,
          username: token.name,
          avatar: token.picture,
          email: token.email,
          platform: 'github',
        },
      })
      return session
    },
  },
}

export default NextAuth(authOptions)
