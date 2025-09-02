import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { firstname, lastname, email, phone, service, message } = await request.json();

    // Validação básica
    if (!firstname || !email || !service || !message) {
      return new Response(
        JSON.stringify({ message: "Por favor, preencha todos os campos obrigatórios!" }),
        { status: 400 }
      );
    }

    // HTML responsivo do email
    const htmlContent = `
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <style>
            body {
              margin: 0;
              padding: 0;
              font-family: Arial, sans-serif;
              background-color: #1c1c22;
              color: #ffffff;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              border-radius: 8px;
            }
            h2, h3 {
              color: #ff00cc;
            }
            hr {
              border: 1px solid #ff00cc;
            }
            .button {
              display: inline-block;
              padding: 12px 24px;
              background-color: #ff00cc;
              color: #ffffff;
              text-decoration: none;
              border-radius: 6px;
              font-weight: bold;
              margin-top: 20px;
            }
            .footer {
              font-size: 12px;
              color: #cccccc;
              margin-top: 20px;
              text-align: center;
            }
            @media (max-width: 480px) {
              .container {
                padding: 15px;
              }
              h2 { font-size: 20px; }
              h3 { font-size: 16px; }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>📩 Novo contato recebido!</h2>

            <p><strong>Nome:</strong> ${firstname} ${lastname}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Telefone:</strong> ${phone || "Não informado"}</p>
            <p><strong>Serviço:</strong> ${service}</p>

            <hr />

            <h3>Mensagem:</h3>
            <p>${message}</p>

            <div style="text-align:center;">
              <a href="mailto:${email}" class="button">Responder</a>
            </div>

            <p class="footer">
              Este email foi enviado pelo formulário de contato do portfólio.
            </p>
          </div>
        </body>
      </html>
    `;

    // Envio do email
    await resend.emails.send({
      from: "Portfólio <onboarding@resend.dev>",
      to: process.env.EMAIL_RECEIVER,
      replyTo: email,
      subject: `Contato - ${service}`,
      html: htmlContent,
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
