import { ProjectCard } from '../commons/project-card'
import { TotalVisits } from '../commons/total-visits'
import { UserCard } from '../commons/user-card'
import { Button } from '../ui/button'
import { TextInput } from '../ui/text-input'

export function Hero() {
  return (
    <div className="flex h-screen">
      <div className="mt-[35vh] flex w-full flex-col gap-2">
        <h1 className="text-5xl leading-16 font-bold text-white">
          Your projects and social media in one single link
        </h1>
        <h2 className="text-xl leading-6">
          Create your own project page and share them with the world
          <br />
          Track engagement with click Analytics
        </h2>
        <div className="mt-[10vh] flex w-full items-center gap-2">
          <span className="text-xl text-white">projectinbio.com</span>
          <TextInput placeholder="Your link" />
          <Button>Create now</Button>
        </div>
      </div>
      <div className="flex w-full items-center justify-center bg-[radial-gradient(circle_at_50%_50%,#4B2DBB,transparent_55%)]">
        <div className="relative">
          <UserCard />
          <div className="absolute -right-[45%] -bottom-[7%]">
            <TotalVisits />
          </div>
          <div className="absolute top-[20%] -left-[45%] -z-10">
            <ProjectCard />
          </div>
          <div className="absolute -top-[10%] -left-[25%] -z-10">
            <ProjectCard />
          </div>
        </div>
      </div>
    </div>
  )
}
