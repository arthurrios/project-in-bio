import { Header } from '@/app/components/landing-page/header'
import { Button } from '@/app/components/ui/button'

export default function UpgradePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <Header />
      <h2 className="text-2xl font-bold">Choose your plan</h2>
      <div className="flex gap-4">
        <Button>$ 9.90 / month</Button>
        <Button>$ 99.90 Lifetime</Button>
      </div>
    </div>
  )
}
