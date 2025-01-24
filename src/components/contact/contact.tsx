import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Suspense } from 'react'
import { Toaster } from "../ui/toaster"
import { ContactForm } from './contact-form'
import { ContactInfo } from './contact-info'
import { ContactLoading } from './contact-loading'

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
        <ContactInfo />
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle>Envie uma mensagem</CardTitle>
            <CardDescription>Preencha o formulário abaixo</CardDescription>
          </CardHeader>
          <CardContent>
            <Suspense fallback={<ContactLoading />}>
              <ContactForm />
            </Suspense>
          </CardContent>
        </Card>
        <Toaster />
      </div>
    </section>
  )
}
