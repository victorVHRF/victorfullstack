import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    await resend.emails.send({
      from: `${process.env.EMAIL_RESEND_EMAIL}`,
      to: `${process.env.EMAIL_USER}`,
      subject: `Nova mensagem de contato de ${name}`,
      html: `
        <h2>Nova mensagem de contato</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong> ${message}</p>
      `
    })

    return NextResponse.json({ 
      success: true,
      message: 'Email enviado com sucesso'
    })

  } catch (error) {
    console.error('Erro ao enviar email:', error)
    return NextResponse.json(
      { 
        success: false,
        message: 'Erro ao enviar email'
      }, 
      { status: 500 }
    )
  }
}
