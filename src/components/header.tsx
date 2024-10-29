'use client'

import Link from 'next/link'

const Header = () => {
  return (
    <div className='sticky top-0 z-[100] flex h-14 items-center bg-stone-50 bg-opacity-80 backdrop-blur-md'>
      <nav className='container-custom mx-auto flex h-14 items-center justify-between border-b border-b-stone-500'>
        <Link href='/' className='font-sans text-xl font-light'>
          gaoshengyu.site
        </Link>
        <ul className='flex space-x-4'>
          <li>
            <Link href='/' className='hover:underline'>
              首页
            </Link>
          </li>
          <li>
            <Link href='/blog' className='hover:underline'>
              博客
            </Link>
          </li>
          <li>
            <Link href='/about' className='hover:underline'>
              关于
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
