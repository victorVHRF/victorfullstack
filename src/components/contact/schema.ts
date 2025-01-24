import { z } from 'zod'

export const formSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  message: z.string().min(2, 'Mensagem deve ter pelo menos 10 caracteres')
})

export type FormSchema = z.infer<typeof formSchema>
