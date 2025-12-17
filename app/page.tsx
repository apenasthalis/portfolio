import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"
import { ProjectShowcase } from "@/components/project-showcase"
import { SkillsShowcase } from "@/components/skills-showcase"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <Navbar />
      <main className="flex-1 mx-auto px-4 sm:px-6 w-full max-w-7xl">
        <HeroSection />

        <section className="space-y-8 py-12 md:py-24 w-full">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl tracking-tighter">Projetos em Destaque</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
              Conheça alguns dos meus trabalhos mais recentes e relevantes
            </p>
          </div>

          <ProjectShowcase limit={3} />

          <div className="flex justify-center">
            <Link href="/projects">
              <Button variant="outline" className="gap-2">
                Ver todos os projetos
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>

        <section className="space-y-8 bg-slate-50 py-12 md:py-24 rounded-lg w-full">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl tracking-tighter">Minhas Habilidades</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">Tecnologias e ferramentas que domino</p>
          </div>

          <SkillsShowcase />

          <div className="flex justify-center">
            <Link href="/skills">
              <Button variant="outline" className="gap-2">
                Ver todas as habilidades
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>

        <section className="py-12 md:py-24 w-full">
          <div className="gap-6 lg:gap-12 grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl tracking-tighter">Vamos trabalhar juntos?</h2>
              <p className="max-w-[600px] text-gray-500 lg:text-base/relaxed md:text-xl/relaxed xl:text-xl/relaxed">
                Estou disponível para novos projetos e oportunidades. Entre em contato para discutirmos como posso
                ajudar a transformar suas ideias em realidade.
              </p>
              <div className="flex min-[400px]:flex-row flex-col gap-2">
                <Link href="mailto:1thalisgabriel1@gmail.com">
                  <Button className="gap-2">
                    <Mail className="w-4 h-4" />
                    Entre em contato
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" className="gap-2">
                    Saiba mais sobre mim
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="gap-4 grid">
                <div className="flex gap-4">
                  <Link href="https://github.com/apenasthalis" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Github className="w-5 h-5" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link href="https://www.linkedin.com/in/thalis-gabriel/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Linkedin className="w-5 h-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link href="mailto:1thalisgabriel1@gmail.com">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Mail className="w-5 h-5" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
