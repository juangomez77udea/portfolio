import React from 'react'
import Hero from '@/app/components/molecules/Hero';
import TitleContentCenter from '@/app/components/atoms/TitleContentCenter'
import KnowledgeGrid from '@/app/components/molecules/KnowledgeGrid';
import Degress from '@/app/components/molecules/Degrees';
import Carousel from '@/app/components/molecules/carousel';
import Footer from '@/app/components/molecules/footer';

interface Project {
      id: number;
      title: string;
      description: string;
      imageUrl: string;
      liveUrl: string;
      tags: string[];
}

const ContentCenter = () => {

      const projects: Project[] = [
            {
                  id: 1,
                  title: "API - Rick and Morty",
                  description: "Proyecto de API de Rick and Morty.",
                  imageUrl: "/rick-morty.png",
                  liveUrl: "https://tallerhtmljuancarlosgomezjaramillo.vercel.app/",
                  tags: ["HTML", "CSS", "JavaScript"]
            },
            {
                  id: 2,
                  title: "Contador de Calorias - React",
                  description: "Proyecto de un contador de calorias utilizando React.",
                  imageUrl: "/calories.png",
                  liveUrl: "https://charming-blancmange-9fc52e.netlify.app/",
                  tags: ["React", "Tailwind CSS", "TypeScript"]
            },
            {
                  id: 3,
                  title: "Planificador de Gastos - React",
                  description: "Proyecto de Planificador de Gastos utilizando React.",
                  imageUrl: "/planificador.png",
                  liveUrl: "https://admin-gastos-peach.vercel.app/",
                  tags: ["React", "TypeScript", "Tailwind CSS"]
            },
            {
                  id: 4,
                  title: "Gestor Financiero - React",
                  description: "Proyecto de Gestor Financiero utilizando React.",
                  imageUrl: "/financiero.png",
                  liveUrl: "https://gestor-financiero.vercel.app/",
                  tags: ["React", "Tailwind CSS", "java - Spring Boot"]
            },
            {
                  id: 5,
                  title: "Cotizador de Criptomonedas - React",
                  description: "Proyecto de un Cotizador de Criptomonedas utilizando React.",
                  imageUrl: "/cripto.png",
                  liveUrl: "https://clinquant-kashata-f131c3.netlify.app/",
                  tags: ["React", "Tailwind CSS", "JavaScript"]
            },
            {
                  id: 6,
                  title: "Manjeador de redes sociales - Devtree",
                  description: "Proyecto de Manjeador de redes sociales utilizando React.",
                  imageUrl: "/Devtree.png",
                  liveUrl: "https://devtree-juan.netlify.app/",
                  tags: ["React", "Tailwind CSS", "JavaScript"]
            },
            {
                  id: 7,
                  title: "Color Picker - React - Module Federation",
                  description: "Proyecto de Color Picker utilizando React y Module Federation.",
                  imageUrl: "/picker.png",
                  liveUrl: "https://mf-host-jc.netlify.app/",
                  tags: ["React", "Tailwind CSS", "JavaScript", "Module Federation"]
            },
            {
                  id: 8,
                  title: "Seguimiento de Pacientes Veterinaria",
                  description: "Proyecto de Seguimiento de Pacientes para una Veterinaria utilizando React.",
                  imageUrl: "/vet.png",
                  liveUrl: "https://jade-palmier-82491e.netlify.app/",
                  tags: ["React", "Tailwind CSS", "TypeScript", "Zustand"]
            },
            {
                  id: 9,
                  title: "Calculadora de Propinas - React",
                  description: "Proyecto de una calculadora de propinas utilizando React.",
                  imageUrl: "/propinas.png",
                  liveUrl: "https://creative-tapioca-55c6d0.netlify.app/",
                  tags: ["React", "Tailwind CSS", "JavaScript"]
            },
            {
                  id: 10,
                  title: "Buscador de Clima por Ciudad - React",
                  description: "Proyecto de un buscador de clima por ciudad utilizando React.",
                  imageUrl: "/clima.png",
                  liveUrl: "https://app-clima-vue-ashen.vercel.app/",
                  tags: ["React", "Tailwind CSS", "TypeScript"]
            },
            {
                  id: 11,
                  title: "Juego de Blackjack - React",
                  description: "Proyecto de un juego de blackjack utilizando React.",
                  imageUrl: "/b-jack.png",
                  liveUrl: "https://clever-swartz-6e6bba.netlify.app/",
                  tags: ["React", "Tailwind CSS", "JavaScript"]
            },
            {
                  id: 12,
                  title: "Encriptador de mensajes sencillo - React",
                  description: "Proyecto de un encriptador de mensajes sencillo utilizando React.",
                  imageUrl: "/encript.png",
                  liveUrl: "https://voluble-maamoul-abe593.netlify.app/",
                  tags: ["React", "CSS", "JavaScript"]
            },
            {
                  id: 13,
                  title: "Tarjeta de cumpleaños - React - three.js - emailjs-com",
                  description: "Proyecto de una tarjeta de cumpleaños utilizando React.",
                  imageUrl: "/bhd.png",
                  liveUrl: "https://sabas-birthday-g5sby3fkj-juangomez77-udeaeducos-projects.vercel.app/",
                  tags: ["React", "Tailwind CSS", "JavaScript"]
            }
      ]

      return (
            <div className='flex flex-col w-full h-full px-4 md:px-6 lg:px-10 pb-20 lg:pb-0'>

                  <section className='w-full'>
                        <Hero />
                  </section>

                  <section className='w-full'>
                        <TitleContentCenter
                              title='My Knowledge'
                              description='A glimpse into my knowledge.'
                        />
                        <KnowledgeGrid />
                  </section>

                  <section className='w-full'>
                        <TitleContentCenter
                              title='Education'
                              description='My studies and certifications.'
                        />
                        <Degress />
                  </section>

                  <section className='w-full'>
                        <TitleContentCenter
                              title='Portfolio'
                              description='In this section you can see some of my projects.'
                        />
                        <Carousel projects={projects} title="Mis Proyectos" />
                  </section>

                  <section className='w-full'>
                        <Footer />
                  </section>

            </div>
      )
}

export default ContentCenter