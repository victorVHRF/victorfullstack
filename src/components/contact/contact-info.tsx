import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Github, Linkedin, Mail } from 'lucide-react'

export function ContactInfo() {
  return (
    <Card className="border-primary/20">
      <CardHeader>
        <CardTitle>Informações de Contato</CardTitle>
        <CardDescription>Você pode me encontrar nas seguintes plataformas</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <a
          href="mailto:victor.vhrf@gmail.com"
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
  )
}
