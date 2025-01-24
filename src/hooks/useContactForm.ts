import { formSchema, FormSchema } from "@/components/contact/schema"
import { useToast } from "@/hooks/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"

export function useContactForm() {
  const { toast } = useToast()
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema)
  })

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: FormSchema) => {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      return response.json()
    },
    onSuccess: () => {
      toast({
        title: "Sucesso!",
        description: "Sua mensagem foi enviada com sucesso.",
        duration: 3000,
      })
      form.reset()
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Erro!",
        description: "Houve um erro ao enviar sua mensagem.",
        duration: 3000,
      })
    }
  })

  const onSubmit = (data: FormSchema) => {
    mutate(data)
  }

  return {
    form,
    isPending,
    onSubmit
  }
}
