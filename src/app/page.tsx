import { Header } from './components/landing-page/header'
import { Hero } from './components/landing-page/hero'
import { VideoExplanation } from './components/landing-page/video-explanation'

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl">
      <Hero />
      <Header />
      <VideoExplanation />
      <Pricing />
      {/* <FAQ /> */}
    </div>
  )
}
