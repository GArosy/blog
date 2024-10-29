'use client'

import { useState, useEffect } from 'react'
import Editor from '@/components/editor'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import DatePicker from '@/components/calendar'

export default function Submit() {
  const [date, setDate] = useState<Date>(new Date())
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const [editor, setEditor] = useState<any>()
  const [imageUrl, setImageUrl] = useState<string>('')
  useEffect(() => {
    // 获取服务器时间
    fetch('/api/time')
      .then((res) => res.json())
      .then((data) => {
        setDate(new Date(data.timestamp))
      })
  }, [])

  const handleSubmit = () => {
    console.log(date, title, content)
  }
  const handleAddImage = () => {
    editor?.chain().focus().setImage({ src: imageUrl }).run()
  }

  return (
    <div className='space-y-4 py-6'>
      <div className='flex items-center justify-between'>
        <div className='text-xl font-medium'>新增文章</div>
        <DatePicker date={date} setDate={setDate} />
      </div>
      <Input
        className=''
        placeholder='请输入文章标题'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className='rounded-lg border shadow-sm focus-within:ring-1 focus-within:ring-black'>
        <Editor content={content} setContent={setContent} onRefReady={setEditor} />
      </div>
      <div className='flex justify-between'>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant={'outline'}>添加图片</Button>
          </PopoverTrigger>
          <PopoverContent className='flex gap-2 rounded-lg p-3'>
            <Input className='h-8' value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
            <Button onClick={handleAddImage} size={'sm'}>
              添加
            </Button>
          </PopoverContent>
        </Popover>
        <Button onClick={handleSubmit}>发布</Button>
      </div>
    </div>
  )
}
