'use client'

import { useState, useEffect } from 'react'
import { Editor } from '@tiptap/react'
import TipTapEditor from '@/components/editor'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import DatePicker from '@/components/calendar'
import { useToast } from '@/hooks/use-toast'

export default function Submit() {
  const { toast } = useToast()
  const [createdAt, setCreatedAt] = useState<Date>(new Date())
  const [title, setTitle] = useState<string>('')
  const [tags, setTags] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const [editor, setEditor] = useState<Editor | undefined>()
  const [imageUrl, setImageUrl] = useState<string>('')
  useEffect(() => {
    // 获取服务器时间
    fetch('/api/time')
      .then((res) => res.json())
      .then((data) => {
        setCreatedAt(new Date(data.timestamp))
      })
  }, [])

  const handleSubmit = async () => {
    try {
      const body = {
        createdAt,
        title,
        content,
        tags,
      }
      const res = await fetch('/api/post/create', {
        method: 'POST',
        body: JSON.stringify(body),
      })
      if (res.status === 200) {
        toast({
          title: '发布成功',
        })
      }
    } catch (error) {
      toast({
        title: '发布失败',
      })
    }
  }
  const handleAddImage = () => {
    editor?.chain().focus().setImage({ src: imageUrl }).run()
  }

  return (
    <div className='space-y-4 py-6'>
      <div className='flex items-center justify-between'>
        <div className='text-xl font-medium'>新增文章</div>
        <DatePicker date={createdAt} setDate={setCreatedAt} />
      </div>
      <Input placeholder='文章标题' value={title} onChange={(e) => setTitle(e.target.value)} />
      <Input
        style={{ fontStyle: 'italic' }}
        placeholder='标签'
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <div className='rounded-lg border shadow-sm focus-within:ring-1 focus-within:ring-black'>
        <TipTapEditor content={content} setContent={setContent} onRefReady={setEditor} />
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
