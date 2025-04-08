import { TrendingUp } from 'lucide-react'

export function TotalVisits() {
  return (
    <div className="bg-background-secondary border-border-primary flex w-min items-center gap-5 rounded-xl border px-8 py-3 whitespace-nowrap shadow-lg">
      <span className="font-bold text-white">Total Visits</span>
      <div className="text-accent-green flex items-center gap-2">
        <span className="text-3xl font-bold">12342</span>
        <TrendingUp />
      </div>
      {/* 
      <div className="flex items-center gap-2">
        <button>Portal</button>
        <button>LogOut</button>
      </div> */}
    </div>
  )
}
