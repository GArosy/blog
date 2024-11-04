'use client'

import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Highlight from '@tiptap/extension-highlight'
import Typography from '@tiptap/extension-typography'
import Dropcursor from '@tiptap/extension-dropcursor'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React, { useEffect } from 'react'

export default function Editor({
  content,
  setContent,
  onRefReady,
}: {
  content: string
  setContent: (content: string) => void
  onRefReady: (editor: any) => void
}) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Document,
      Paragraph,
      Highlight,
      Typography,
      Dropcursor,
      Image,
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: 'https',
      }),
    ],
    content: content,
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML())
    },
  })

  useEffect(() => {
    onRefReady(editor)
  }, [onRefReady, editor])

  return <EditorContent editor={editor} className='prose prose-stone max-w-none px-3 py-2' />
}
