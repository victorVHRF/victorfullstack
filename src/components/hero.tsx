import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="container flex flex-col-reverse md:flex-row items-center justify-between py-12 md:py-24 gap-8">
      <div className="flex flex-col space-y-4 text-center md:text-left">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-cyan-400">
          Full Stack Developer
        </h1>
        <p className="max-w-[600px] text-muted-foreground md:text-xl">
          Transformando ideias em soluções digitais inovadoras com expertise em desenvolvimento web full stack.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <Button asChild>
            <Link href="#contact">Entre em contato</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="#about">Saiba mais</Link>
          </Button>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-cyan-400 rounded-full blur-3xl opacity-20 animate-pulse" />
        <Image
          src="/victorIA.png"
          alt="Victor Hugo"
          width={400}
          height={400}
          className="relative rounded-full border-2 border-primary/20"
          priority
        />
      </div>
    </section>
  )
}

