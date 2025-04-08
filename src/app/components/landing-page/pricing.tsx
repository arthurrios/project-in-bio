import { TRIAL_DAYS } from '@/app/lib/config'

import { Button } from '../ui/button'

export default function Pricing() {
  return (
    <div className="flex flex-col items-center gap-15 py-20">
      <div className="flex flex-col items-center gap-6">
        <h3 className="text-4xl font-bold text-white">
          Accessible value for all
        </h3>
        <p className="max-w-4xl text-center text-xl text-balance">
          Join the community of creators and professionals who are already
          elevating their online presence. Try it free for{' '}
          <strong className="text-accent-pink font-bold">
            {TRIAL_DAYS} days
          </strong>
          , no commitment!
        </p>
      </div>
      <div className="flex items-end gap-9">
        <div className="flex max-h-fit flex-col gap-7 rounded-2xl border border-[#1E1E1E] p-8">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-white">Monthly</span>
            <span className="text-content-body">Only</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-5xl font-bold text-white">$ 9.90</span>
            <span className="text-content-headline text-2xl">/month</span>
          </div>
          <Button variant="secondary" className="w-fit">
            Subscribe
          </Button>
        </div>
        <div className="flex flex-col">
          <div className="from-accent-purple to-accent-pink flex flex-col items-center rounded-t-2xl bg-gradient-to-r py-2">
            <span className="text-xs font-bold uppercase">Recommended</span>
          </div>
          <div className="from-accent-purple to-accent-pink rounded-b-2xl bg-gradient-to-r p-[1.6px]">
            <div className="bg-background-secondary flex w-full flex-col gap-7 rounded-b-2xl p-8">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">Lifetime</span>
                <span className="text-content-body">Save up with</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-5xl font-bold text-white">$ 99.90</span>
                <span className="text-content-headline text-2xl">/month</span>
              </div>
              <Button className="w-fit">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
