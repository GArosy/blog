import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import prisma from '@/lib/prisma'

export async function POST(req: Request) {
  if (req.method === 'POST') {
    const body = await req.json()
    const { title, tags, content, createdAt } = body

    if (!title || !tags || !content || !createdAt) {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
    }

    const session = await getServerSession()
    if (!session) {
      throw Error('用户未登录')
    }
    try {
      await prisma.post.create({
        data: {
          title,
          author: session.user?.name || '',
          avatar: session.user?.image || '',
          content,
          createdAt,
          tags: tags?.split(' ').map((tag) => tag.trim()) || [], // tags以空格分隔
        },
      })
      // 返回成功响应
      return NextResponse.json({ message: 'Post created successfully' }, { status: 200 })
    } catch (error) {
      console.error('Error creating post:', error)
      return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    } finally {
      await prisma.$disconnect()
    }
  } else {
    // 如果不是POST请求，返回405
    return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 })
  }
}
