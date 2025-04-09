import { Rocket } from 'lucide-react'

import { Header } from '@/app/components/landing-page/header'

import { CreateLinkForm } from './create-link-form'

export default function CreatePage() {
  return (
    <div>
      <Header />
      <div className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center gap-10">
        <div className="flex items-center gap-4">
          <h1>Choose your link</h1>
          <Rocket className="size-10" />
        </div>
        <CreateLinkForm />
      </div>
    </div>
  )
}
