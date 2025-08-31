"use client";

import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Desenvolvimento Web",
    slogan: "Sites modernos, rápidos e responsivos que geram resultados.",
    description:
      "Criação de websites profissionais e responsivos com foco em performance, SEO e experiência do usuário.",
    href: "https://www.linkedin.com/in/joziane-oliveira",
  },
  {
    num: "02",
    title: "Aplicações Mobile (Em aprendizado)",
    slogan: "Desenvolvendo apps simples e funcionais enquanto aprendo novas tecnologias.",
    description:
      "Estudo e crio aplicações móveis básicas para Android e iOS, focando em boas práticas e aprendizado contínuo.",
    href: "https://www.linkedin.com/in/joziane-oliveira",
  },
  {
    num: "03",
    title: "Back-end & APIs (Estudos em andamento)",
    slogan: "Aprendendo a construir sistemas e APIs escaláveis.",
    description:
      "Atualmente estudando servidores, bancos de dados e APIs, com pequenos projetos para prática e aprendizado.",
    href: "https://www.linkedin.com/in/joziane-oliveira",
  },
  {
    num: "04",
    title: "Aulas de Matemática",
    slogan: "Matemática descomplicada para você aprender de verdade.",
    description:
      "Aulas particulares com foco na sua necessidade: reforço escolar, vestibulares ou concursos.",
    href: "https://wa.me/5534998081082",
  },
];


const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.4, duration: 0.6, ease: "easeInOut" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              {/* Top: Número e Ícone */}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
                <a
                  href={service.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent-hover transition-all duration-500 flex justify-center items-center hover:-rotate-45 cursor-pointer"
                >
                  <BsArrowDownRight className="text-black text-3xl transition-colors duration-500 group-hover:text-white" />
                </a>
              </div>

              {/* Título */}
              <h2 className="text-[32px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>

              {/* Slogan */}
              <p className="text-lg italic text-accent font-medium">
                {service.slogan}
              </p>

              {/* Descrição */}
              <p className="text-white/60">{service.description}</p>

              {/* Linha de separação */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
