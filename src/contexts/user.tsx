'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { UserSession } from '@/types/user'

const UserContext = createContext<UserSession | null>(null)

export const UserProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [user, setUser] = useState<UserSession | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch('/api/auth/session')
      const session = await res?.json()
      setUser(session.user)
    }
    fetchUser()
  }, [])

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}

export const useUser = () => useContext(UserContext)
