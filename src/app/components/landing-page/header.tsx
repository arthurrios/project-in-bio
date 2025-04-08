import Image from 'next/image'

import { Button } from '../ui/button'

export function Header() {
  return (
    <div className="absolute top-0 right-0 left-0 mx-auto flex max-w-7xl items-center justify-between py-10">
      <div className="flex items-center gap-4">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={300}
          height={200}
          className="h-8 w-7"
        />
        <h3 className="text-2xl font-bold text-white">ProjectInBio</h3>
      </div>
      <div className="flex items-center gap-4">
        <Button>My Page</Button>
        <Button>LogOut</Button>
      </div>
    </div>
  )
}
