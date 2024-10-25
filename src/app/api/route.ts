import { NextResponse } from 'next/server'

export const api = () => {
  return NextResponse.json({ message: 'Hello, world!' })
}
