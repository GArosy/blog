import Link from 'next/link'
import prisma from '@/lib/prisma'
import { Button } from '@/components/ui/button'
import { format } from 'date-fns'

// ISR Cache
export const revalidate = 60

export default async function Blog() {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })
  console.log('Regenerate posts - length: ', posts?.length, 'at', new Date().toISOString())

  return (
    <main className='w-full py-3'>
      <div className='flex justify-end'>
        <Button asChild>
          <Link href='/blog/submit'>新增文章</Link>
        </Button>
      </div>
      <div className='divide-y'>
        {/* 文章列表 */}
        {posts.map((item, index) => (
          <article key={index} className='py-4'>
            <Link href={`/blog/${item.id}`}>{item.title}</Link>
            <p className='text-sm text-gray-600'>{format(item.createdAt, 'yyyy-MM-dd')}</p>
          </article>
        ))}
      </div>
    </main>
  )
}
