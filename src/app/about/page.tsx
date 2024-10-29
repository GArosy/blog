'use client'

import { Icon } from '@iconify-icon/react'

export default function Home() {
  return (
    <div>
      <h1 className='pt-6 text-xl font-bold'>关于我</h1>
      <p className='text-sm leading-6 text-stone-500'>一个普通的前端开发者</p>
      <div className='mt-8 flex items-center gap-4 font-sans text-sm font-light text-stone-500'>
        <div className='flex items-center gap-1'>
          <Icon icon='mdi:wechat' width={20} height={20} />
          <span>gsy5197</span>
        </div>
        <div className='flex items-center gap-1'>
          <Icon icon='tabler:mail-filled' width={18} height={18} />
          <span>837225481@qq.com</span>
        </div>
      </div>
    </div>
  )
}
