'use client'

import { useRouter } from 'next/navigation'
import { ChangeEvent, FormEvent, useState } from 'react'

import { createLink } from '@/app/actions/create-link'
import { verifyLink } from '@/app/actions/verify-link'
import { Button } from '@/app/components/ui/button'
import { TextInput } from '@/app/components/ui/text-input'
import { sanitizeLink } from '@/app/lib/utils'

export function CreateLinkForm() {
  const router = useRouter()

  const [link, setLink] = useState('')
  const [error, setError] = useState('')

  function handleLinkChange(e: ChangeEvent<HTMLInputElement>) {
    setLink(sanitizeLink(e.target.value))
    setError('')
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (link.length === 0) {
      setError('Link cannot be empty :)')
      return
    }

    const isLinkTaken = await verifyLink(link)

    if (isLinkTaken) {
      setError('Link already taken :(')
      return
    }

    const isLinkCreated = await createLink(link)

    if (!isLinkCreated)
      return setError('Error creating profile. Please try again.')

    router.push(`/${link}`)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex w-full items-center gap-2">
        <span>projectinbio.com/</span>
        <TextInput value={link} onChange={handleLinkChange} />
        <Button className="w-30">Create</Button>
      </form>
      <div>
        <span className="text-accent-pink">{error}</span>
      </div>
    </>
  )
}
