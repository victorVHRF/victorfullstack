import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="container py-12 md:py-24 space-y-8">
      <div className="flex flex-col items-center text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sobre mim</h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground">
          Conheça um pouco mais sobre minha trajetória e experiência profissional
        </p>
      </div>
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle>Victor Hugo</CardTitle>
          <CardDescription>Desenvolvedor Full Stack Pleno</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Meu nome é Victor Hugo, sou Desenvolvedor Full Stack Pleno, tenho 30 anos, moro em Campo Grande - MS, 
            formado em Análise de Sistemas, pós-graduado em Engenharia de Software e pós-graduando em Tech Lead e possuo mais de 5 anos de 
            experiência em desenvolvimento de software especializado em Angular, React.js e Node.js.
          </p>
          <p>
            Possuo ampla experiência em bancos de dados, incluindo Oracle, SQL Server, PostgreSQL e MongoDB. 
            Busco constantemente inovação e qualidade em minhas soluções, sempre alinhadas com as necessidades 
            dos clientes. Vamos trabalhar juntos para alcançar grandes resultados!
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Button variant="outline">
              <a href="/curriculo.pdf" download>
                Download Currículo
              </a>
            </Button>
            <Button variant="default">
              <a href="https://victorvhrf.github.io/cv" target="_blank" rel="noopener noreferrer">
                Currículo Online
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

