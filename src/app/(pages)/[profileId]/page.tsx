import { Plus } from 'lucide-react'
import Link from 'next/link'

import { ProjectCard } from '@/app/components/commons/project-card'
import { TotalVisits } from '@/app/components/commons/total-visits'
import { UserCard } from '@/app/components/commons/user-card'

export default async function ProfilePage({
  params,
}: {
  params: { profileId: string }
}) {
  const { profileId } = await params

  return (
    <div className="relative flex min-h-screen overflow-hidden p-20 pb-40">
      <div className="bg-background-tertiary fixed top-0 left-0 flex w-full items-center justify-center gap-1 py-2">
        <span>Your using trial version.</span>
        <Link href={`/${profileId}/upgrade`}>
          <button className="text-accent-green cursor-pointer font-bold">
            Upgrade now!
          </button>
        </Link>
      </div>
      <div className="flex h-min w-1/2 justify-center">
        <UserCard />
      </div>
      <div className="flex w-full flex-wrap content-start justify-center gap-4 overflow-y-auto">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <button className="bg-background-secondary border-border-secondary flex cursor-pointer items-center justify-center gap-2 rounded-[20px] border-dashed px-20 py-10 hover:border">
          <Plus className="text-accent-green size-10" />
          <span>Novo projeto</span>
        </button>
      </div>
      <div className="fixed right-0 bottom-4 left-0 z-10 mx-auto w-min">
        <TotalVisits />
      </div>
    </div>
  )
}
