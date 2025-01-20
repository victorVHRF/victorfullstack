import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { Hero } from '@/components/hero'
import { Skills } from '@/components/skills'
import { WhatsAppButton } from '@/components/whatsapp-button'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Hero />
        <About />
        <Skills />
        <Contact />
        <WhatsAppButton />
      </main>
    </div>
  )
}

