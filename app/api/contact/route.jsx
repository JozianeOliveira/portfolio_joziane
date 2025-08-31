import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { firstname, lastname, email, phone, service, message } = await request.json();

    // Validação básica
    if (!firstname || !email || !service || !message) {
      return new Response(JSON.stringify({ message: "Por favor, preencha todos os campos obrigatórios!" }), { status: 400 });
    }

    // Configuração do transporter (Gmail/Outlook)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // ou "smtp.office365.com" para Outlook
      port: 465, // 465 para SSL (Gmail), 587 para TLS (Outlook)
      secure: true, // true para SSL, false para TLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // App password se usar Gmail com 2FA
      },
    });

    const mailOptions = {
      from: `"${firstname} ${lastname}" <${email}>`,
      to: process.env.EMAIL_RECEIVER || "jozioliveira@edu.uniube.br",
      subject: `Contato - ${service}`,
      text: `Nome: ${firstname} ${lastname}\nEmail: ${email}\nTelefone: ${phone}\n\nMensagem:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Email enviado com sucesso!" }), { status: 200 });
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return new Response(JSON.stringify({ message: "Erro ao enviar o email." }), { status: 500 });
  }
}
