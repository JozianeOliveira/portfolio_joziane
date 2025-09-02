import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { firstname, lastname, email, phone, service, message } =
      await request.json();

    if (!firstname || !email || !service || !message) {
      return new Response(
        JSON.stringify({
          message: "Por favor, preencha todos os campos obrigatórios!",
        }),
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Portfólio <onboarding@resend.dev>",
      to: process.env.EMAIL_RECEIVER,
      replyTo: email,
      subject: `Contato - ${service}`,
      text: `
    Nome: ${firstname} ${lastname}
    Email: ${email}
    Telefone: ${phone || "Não informado"}
    Serviço: ${service}

    Mensagem:
    ${message}
  `,
    });

    return new Response(
      JSON.stringify({ message: "Email enviado com sucesso!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Erro ao enviar email:", error);
    return new Response(
      JSON.stringify({ message: "Erro ao enviar o email." }),
      { status: 500 }
    );
  }
}
