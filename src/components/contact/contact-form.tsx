import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useContactForm } from "@/hooks/useContactForm"

export function ContactForm() {
  const { form, isPending, onSubmit } = useContactForm()
  const { register, handleSubmit, formState: { errors } } = form

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Input
          {...register('name')}
          placeholder="Nome"
          className={errors.name ? 'border-red-500' : ''}
        />
        {errors.name && (
          <span className="text-sm text-red-500">{errors.name.message}</span>
        )}
      </div>
      <div className="space-y-2">
        <Input
          {...register('email')}
          type="email"
          placeholder="Email"
          className={errors.email ? 'border-red-500' : ''}
        />
        {errors.email && (
          <span className="text-sm text-red-500">{errors.email.message}</span>
        )}
      </div>
      <div className="space-y-2">
        <Textarea
          {...register('message')}
          placeholder="Mensagem"
          className={errors.message ? 'border-red-500' : ''}
        />
        {errors.message && (
          <span className="text-sm text-red-500">{errors.message.message}</span>
        )}
      </div>
      <Button type="submit" disabled={isPending} className="w-full">
        {isPending ? 'Enviando...' : 'Enviar mensagem'}
      </Button>
    </form>
  )
}
