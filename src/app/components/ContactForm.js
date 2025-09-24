"use client";
import { useState } from "react";
import withFadeIn from "./withFadeIn";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Enviando...");
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form }),
      });
      if (res.ok) {
        setStatus("¡Mensaje enviado correctamente!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Error al enviar el mensaje. Intenta de nuevo.");
      }
    } catch {
      setStatus("Error al enviar el mensaje. Intenta de nuevo.");
    }
  };

  return (
    <section id="contact" className="container py-12">
      <h2 className="text-3xl font-bold text-gray-800  mb-8 text-center">
        Contacto
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-gray-200 rounded-xl shadow-lg p-8 flex flex-col gap-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          value={form.name}
          onChange={handleChange}
          required
          className="border rounded text-black px-4 py-2 focus:outline-gray-800"
        />
        <input
          type="email"
          name="email"
          placeholder="Tu correo"
          value={form.email}
          onChange={handleChange}
          required
          className="border rounded px-4 py-2 text-black focus:outline-gray-800"
        />
        <textarea
          name="message"
          placeholder="Escribe tu comentario..."
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className="border rounded px-4 py-2 focus:outline-gray-800"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition font-semibold"
        >
          Enviar
        </button>
        {status && <p className="text-center text-sm mt-2">{status}</p>}
      </form>
    </section>
  );
}

export default withFadeIn(ContactForm);
