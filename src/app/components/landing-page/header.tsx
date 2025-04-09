import Image from 'next/image'

import { manageAuth } from '@/app/actions/manage-auth'
import { auth } from '@/app/lib/auth'

import { Button } from '../ui/button'

export async function Header() {
  const session = await auth()

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
        {session && <Button>My Page</Button>}
        <form action={manageAuth}>
          <Button>{session ? 'LogOut' : 'LogIn'}</Button>
        </form>
      </div>
    </div>
  )
}
