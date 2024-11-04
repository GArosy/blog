'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

const navList = [
  {
    path: '',
    name: 'Home',
  },
  {
    path: 'blog',
    name: 'Blog',
  },
  {
    path: 'about',
    name: 'About',
  },
]

export default function Header() {
  return (
    <div className='sticky top-0 z-[100] flex h-14 justify-center bg-stone-50 bg-opacity-80 backdrop-blur-md'>
      <nav className='container-custom mx-4 flex items-center justify-between border-b border-b-stone-500 text-center'>
        <Link href='/' className='text-xl'>
          gaoshengyu.site
        </Link>
        <ul className='flex space-x-4'>
          {navList.map((item) => (
            <NavItem key={item.path} {...item} />
          ))}
        </ul>
      </nav>
    </div>
  )
}

const NavItem = ({ path, name }: { path: string; name: string }) => {
  const pathname = usePathname()
  const isCurrent = useMemo(() => pathname.split('/')[1] === path, [pathname, path])
  return (
    <li className='relative'>
      <div className={`${isCurrent ? 'absolute bottom-0 h-2.5 w-full bg-stone-200' : ''}`}></div>
      <Link href={`/${path}`} className='relative'>
        {name}
      </Link>
    </li>
  )
}
