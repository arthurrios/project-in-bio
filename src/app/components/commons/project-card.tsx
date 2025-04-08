import Image from 'next/image'

export function ProjectCard() {
  return (
    <div className="bg-background-secondary hover:border-border-secondary flex h-[132px] w-[430px] gap-5 rounded-[20px] border border-transparent p-3">
      <div className="size-24 flex-shrink-0 overflow-hidden rounded-md">
        <Image
          src="/project1.jpg"
          width={300}
          height={200}
          alt="Project 1"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-accent-green text-xs font-bold uppercase">
          10 clicks
        </span>
        <div className="flex flex-col">
          <span className="text-xl font-bold text-white">Project 1</span>
          <span className="text-content-body text-sm">
            Detailed project description about what the project does
          </span>
        </div>
      </div>
    </div>
  )
}
