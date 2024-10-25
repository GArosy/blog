import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className='w-full py-6'>
      <h1 className='mb-6 text-xl font-bold'>最新博客文章</h1>
      <div className='space-y-8'>
        {/* 文章列表 */}
        {Array.from({ length: 10 }).map((_, i) => (
          <article key={i} className='border-b pb-6'>
            <Button variant='link' className='p-0 text-xl'>
              文章标题{i + 1}
            </Button>
            <p className='mb-4 text-gray-600'>发布日期：2024年3月15日</p>
            <p className='text-gray-800'>这里是文章摘要，简要介绍文章内容...</p>
          </article>
        ))}
      </div>
    </main>
  )
}
