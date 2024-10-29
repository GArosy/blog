'use client'

import * as React from 'react'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

export default function DatePicker({
  date,
  setDate,
}: {
  date: Date
  setDate: (date: Date) => void
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          className={cn(
            'h-9 w-64 justify-start bg-transparent px-3 text-left text-sm font-normal',
            !date && 'text-muted-foreground'
          )}
        >
          <CalendarIcon className='mr-1 h-4 w-4' />
          {date ? format(date, 'yyyy-MM-dd HH:mm:ss') : <span>选择日期</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0'>
        <Calendar mode='single' selected={date} onSelect={setDate} initialFocus />
      </PopoverContent>
    </Popover>
  )
}
