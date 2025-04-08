import { cn } from '@/app/lib/utils'

export function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cn(
        `bg-background-secondary focus-within:ring-accent-purple placeholder:text-content-placeholder hover:border-border-secondary hover:text-content-body active:border-border-tertiary w-full rounded-xl border border-transparent p-3 text-white outline-0 focus-within:ring-2`,
        props.className,
      )}
    />
  )
}
