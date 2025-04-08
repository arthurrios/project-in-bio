import { Rocket } from 'lucide-react'

import { Header } from '@/app/components/landing-page/header'
import { Button } from '@/app/components/ui/button'
import { TextInput } from '@/app/components/ui/text-input'

export default function CreatePage() {
  return (
    <div>
      <Header />
      <div className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center gap-10">
        <div className="flex items-center gap-4">
          <h1>Choose your link</h1>
          <Rocket className="size-10" />
        </div>
        <form action="" className="flex w-full items-center gap-2">
          <span>projectinbio.com/</span>
          <TextInput />
          <Button className="w-30">Create</Button>
        </form>
        <div>
          <span className="text-accent-pink">Error</span>
        </div>
      </div>
    </div>
  )
}
