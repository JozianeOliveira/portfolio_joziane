"use client";

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
    FaNodeJs,
    FaJava,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

//about data
const about = {
    title: "Sobre mim",
    description: "Profissional formada em Matemática e Análise e Desenvolvimento de Sistemas, com experiência em implantação de sistemas mobile, desenvolvimento web e back-end, e atualmente cursando MBA em Engenharia de Software.",
    info: [
        {
            fieldName: "Nome",
            fieldValue: "Joziane Oliveira"
        },
         {
            fieldName: "Telefone:",
            fieldValue: "+55 (34) 99808 1082"
        },
         {
            fieldName: "Experiência:",
            fieldValue: "Gestão de processos e implantação de sistemas"
        },
         {
            fieldName: "Nacionalidade",
            fieldValue: "Brasileira"
        },
         {
            fieldName: "Email",
            fieldValue: "jozioliveira@edu.uniube.br"
        },
         {
            fieldName: "Freelance",
            fieldValue: "Disponível"
        },
         {
            fieldName: "Idiomas",
            fieldValue: "Português Nativo, Espanhol Avançado e Inglês Intermediário"
        },
    ]
};

// experience data
const experience = {
    icon: "/assets/resume/badge.svg",
    title: "Experiência profissional",
    description: "Atuação em implantação de sistemas mobile, análise de processos e gestão de comunicação e educação.",
    items: [
        {
            company: "Realtec Solução em Gestão",
            position: "Analista de Implantação Mobile",
            duration: "12/2024 – Atual",
        },
        {
            company: "Prefeitura Municipal de São Gotardo",
            position: "Assessora de Comunicação",
            duration: "10/2023 – 12/2024",
        },
        {
            company: "Prefeitura Municipal de São Gotardo",
            position: "Instrutora e Técnica de Informática",
            duration: "02/2022 – 09/2023",
        },
        {
            company: "Estado de Minas Gerais",
            position: "Professora de Matemática, física e português",
            duration: "02/2022 – 12/2023",
        },
    ]
};

// education data
const education = {
    icon: "/assets/resume/cap.svg",
    title: "Formação Acadêmica",
    description: "Formada em Matemática, Análise e Desenvolvimento de Sistemas, pós graduada em Engenharia de Software para dispositivos móveis, atualmente cursando MBA em Engenharia de Software.",
    items: [
         {
            institution: "Universidade de São Paulo - USP",
            degree: "MBA Engenharia de Software",
            duration: "05/2025 – 12/2026 (previsto)",
        },
         {
            institution: "Centro Universitário Internacional - UNINTER",
            degree: "Engenharia de Software para Dispositivos Móveis",
            duration: "2023 - 2025",
        },
         {
            institution: "Universidade de Uberaba - UNIUBE",
            degree: "Análise e Desenvolvimento de Sistemas",
            duration: "2020 - 2024",
        },
        {
            institution: "Universidade de Uberaba - UNIUBE",
            degree: "Licenciatura em Matemática",
            duration: "2019 - 2023",
        },        
    ]
};

// skills data
const skills = {
    title: "My skills",
    description: "Competências técnicas em desenvolvimento web, back-end e ferramentas complementares.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "html 5",
        },
        {
            icon: <FaCss3 />,
            name: "css 3",
        },
        {
            icon: <FaJs />,
            name: "javascript",
        },
        {
            icon: <FaReact />,
            name: "react.js",
        },
        {
            icon: <SiNextdotjs />,
            name: "next.js",
        },
        {
            icon: <SiTailwindcss />,
            name: "tailwind.css",
        },
        {
            icon: <FaNodeJs />,
            name: "node.js",
        },
        {
            icon: <FaJava />,
            name: "java",
        },
    ]
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";


const Resume = () => {
    return (
        <motion.div 
            initial={{opacity: 0}} 
            animate={{
                opacity: 1, 
                transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className= "flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className="min-h-[70vh] w-full">
                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>    
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index)=> {
                                            return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                <div className="flex items-center gap-3">
                                                    {/* dot */}
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.company}</p>
                                                </div>
                                            </li>
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* education */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>    
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index)=> {
                                            return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                <div className="flex items-center gap-3">
                                                    {/* dot */}
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.institution}</p>
                                                </div>
                                            </li>
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        
                        {/* skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill, index) => {
                                        return <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="group w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center">
                                                        <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                    </TooltipTrigger>
                                                    <TooltipContent className="bg-white text-black px-4 py-2 rounded-md shadow-lg">
                                                        <p className="capitalize">{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>;
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        {/* about */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map ((item, index)=> {
                                        return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                            <span className="text-white/60">{item.fieldName}</span>
                                            <span className="text-xl">{item.fieldValue}</span>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default Resume