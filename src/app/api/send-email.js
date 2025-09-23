import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método no permitido" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Faltan campos obligatorios" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "alexander.arvelo2390@gmail.com",
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: email,
      to: "alexander.arvelo2390@gmail.com",
      subject: `Nuevo mensaje de ${name}`,
      text: message,
      html: `<p><b>Nombre:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Mensaje:</b><br/>${message}</p>`,
    });

    return res.status(200).json({ message: "Correo enviado" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error al enviar el correo", error: error.message });
  }
}
