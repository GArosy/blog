import React from 'react'
import prisma from '@/lib/prisma'
import { format } from 'date-fns'
import { notFound } from 'next/navigation'

export default async function BlogPost({ params }) {
  const post = await prisma.post.findUnique({
    where: { id: Number(params?.id) || -1 },
  })

  if (!post) {
    return notFound()
  }
  return (
    <main className='w-full py-6'>
      <h1 className='text-2xl font-bold'>{post.title}</h1>
      <p className='text-sm text-gray-600'>{format(post.createdAt, 'yyyy-MM-dd')}</p>
      <div
        className='prose prose-stone max-w-none px-3 py-2'
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </main>
  )
}
