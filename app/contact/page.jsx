"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  { icon: <FaPhoneAlt />, title: "Telefone:", description: "+55 (34) 99808-1082" },
  { icon: <FaEnvelope />, title: "Email:", description: "jozioliveira@edu.uniube.br" },
  { icon: <FaMapMarkedAlt />, title: "Localização:", description: "São Gotardo - MG / Brasil" },
];

const servicesList = [
  { value: "desenvolvimento_web", label: "Desenvolvimento Web" },
  { value: "aplicacoes_mobile", label: "Aplicações Mobile" },
  { value: "backend_apis", label: "Back-end & APIs" },
  { value: "aulas_matematica", label: "Aulas de Matemática" },
  { value: "outro", label: "Outros" },
];

const Contact = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.firstname || !form.email || !form.service || !form.message) {
      alert("Por favor, preencha todos os campos obrigatórios!");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        alert(data.message);
        setForm({ firstname: "", lastname: "", email: "", phone: "", service: "", message: "" });
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao enviar a mensagem.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.6 } }}
      className="py-6"
    >
      <div className="container mx-auto flex flex-col xl:flex-row gap-[30px]">
        {/* Form */}
        <div className="xl:w-[54%] order-2 xl:order-none">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
          >
            <h3 className="text-4xl text-accent">Vamos trabalhar juntos!</h3>
            <p className="text-white/60">Preencha o formulário e entrarei em contato.</p>

            {/* Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input name="firstname" placeholder="Nome" value={form.firstname} onChange={handleChange} required />
              <Input name="lastname" placeholder="Sobrenome" value={form.lastname} onChange={handleChange} />
              <Input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
              <Input name="phone" placeholder="Telefone" value={form.phone} onChange={handleChange} />
            </div>

            {/* Select */}
            <Select value={form.service} onValueChange={(val) => setForm({ ...form, service: val })}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione um serviço:" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Serviços</SelectLabel>
                  {servicesList.map((service) => (
                    <SelectItem key={service.value} value={service.value}>{service.label}</SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            {/* Message */}
            <Textarea
              name="message"
              className="h-[200px]"
              placeholder="Escreva sua mensagem aqui."
              value={form.message}
              onChange={handleChange}
              required
            />

            {/* Button */}
            <Button type="submit" size="md" disabled={loading}>
              {loading ? "Enviando..." : "Enviar mensagem"}
            </Button>
          </form>
        </div>

        {/* Info */}
        <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
          <ul className="flex flex-col gap-10">
            {info.map((item, index) => (
              <li key={index} className="flex items-center gap-6">
                <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                  <div className="text-[28px]">{item.icon}</div>
                </div>
                <div className="flex-1">
                  <p className="text-white/60">{item.title}</p>
                  <h3 className="text-xl">{item.description}</h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
