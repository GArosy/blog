import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }; // Next.js 13 以上版本的 App Router必须为HTTP方法导出具名函数
