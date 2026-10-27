import { About } from '@/widgets/about'
import { Benefits } from '@/widgets/benefits'
import { Directions } from '@/widgets/directions'
import { Events } from '@/widgets/events'
import { Faq } from '@/widgets/faq'
import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'
import { Hero } from '@/widgets/hero'
import { JoinCta } from '@/widgets/join-cta'
import { JoinSteps } from '@/widgets/join-steps'
import { Projects } from '@/widgets/projects'
import { TechStack } from '@/widgets/tech-stack'
import { Team } from '@/widgets/team'
import { Testimonials } from '@/widgets/testimonials'

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TechStack />
        <About />
        <Benefits />
        <Directions />
        <Events />
        <Projects />
        <JoinSteps />
        <Team />
        <Testimonials />
        <Faq />
        <JoinCta />
      </main>
      <Footer />
    </>
  )
}
