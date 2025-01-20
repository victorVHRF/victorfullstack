import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="container py-12 md:py-24 space-y-8">
      <div className="flex flex-col items-center text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contato</h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground">
          Entre em contato comigo para discutirmos seu próximo projeto
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle>Informações de Contato</CardTitle>
            <CardDescription>Você pode me encontrar nas seguintes plataformas</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <a
              href="mailto:your@email.com"
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary"
            >
              <Mail className="h-5 w-5" />
              <span>victor.vhrf@gmail.com</span>
            </a>
            <a
              href="https://github.com/victorVHRF"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary"
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/victorhugofonseca"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </a>
          </CardContent>
        </Card>
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle>Envie uma mensagem</CardTitle>
            <CardDescription>Preencha o formulário abaixo</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Input placeholder="Nome" />
              </div>
              <div className="space-y-2">
                <Input type="email" placeholder="Email" />
              </div>
              <div className="space-y-2">
                <Textarea placeholder="Mensagem" />
              </div>
              <Button className="w-full">Enviar mensagem</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

