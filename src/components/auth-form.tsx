'use client'

import React from 'react'
import { signIn, signOut } from 'next-auth/react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { Icon } from '@iconify-icon/react'
import { Button } from '@/components/ui/button'

export default function AuthForm() {
  const { data: session, status } = useSession()
  console.log(session, status)

  const [isGitHubLoading, setIsGitHubLoading] = React.useState<boolean>(false)

  const login = async () => {
    setIsGitHubLoading(true)
    signIn('github', {
      callbackUrl: `${window.location.origin}`,
    })
  }
  const logout = async () => {
    signOut()
  }

  return (
    <div>
      {status === 'unauthenticated' ? (
        <div className='flex flex-col items-center justify-center gap-3'>
          <h1 className='text-xl font-medium'>请登录</h1>
          <Button onClick={login} className='font-inter font-medium'>
            {isGitHubLoading ? (
              <Icon icon='ph:spinner-bold' className='animate-spin' height='1rem' width='1rem' />
            ) : (
              <Icon icon='bi:github' height='1rem' width='1rem' />
            )}
            GitHub
          </Button>
        </div>
      ) : status === 'authenticated' ? (
        <div className='flex flex-col items-center justify-center gap-3'>
          <div className='flex items-center gap-2'>
            <h1 className='text-base'>欢迎，{session?.user?.name}</h1>
            <Image
              src={session?.user?.image ?? ''}
              alt='user avatar'
              width={20}
              height={20}
              className='rounded-full'
            />
          </div>
          <Button onClick={logout} className='font-inter font-medium'>
            登出
          </Button>
        </div>
      ) : null}
    </div>
  )
}
