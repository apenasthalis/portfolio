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
    <div className="min-h-screen flex flex-col items-center">
      <Navbar />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6">
        <HeroSection />

        <section className="py-12 md:py-24 space-y-8 w-full">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projetos em Destaque</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
              Conheça alguns dos meus trabalhos mais recentes e relevantes
            </p>
          </div>

          <ProjectShowcase limit={3} />

          <div className="flex justify-center">
            <Link href="/projects">
              <Button variant="outline" className="gap-2">
                Ver todos os projetos
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        <section className="py-12 md:py-24 space-y-8 bg-slate-50 rounded-lg w-full">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Minhas Habilidades</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">Tecnologias e ferramentas que domino</p>
          </div>

          <SkillsShowcase />

          <div className="flex justify-center">
            <Link href="/skills">
              <Button variant="outline" className="gap-2">
                Ver todas as habilidades
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        <section className="py-12 md:py-24 w-full">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Vamos trabalhar juntos?</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Estou disponível para novos projetos e oportunidades. Entre em contato para discutirmos como posso
                ajudar a transformar suas ideias em realidade.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="mailto:thalis@example.com">
                  <Button className="gap-2">
                    <Mail className="h-4 w-4" />
                    Entre em contato
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" className="gap-2">
                    Saiba mais sobre mim
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="grid gap-4">
                <div className="flex gap-4">
                  <Link href="https://github.com/thalisgabriel" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link href="https://linkedin.com/in/thalisgabriel" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link href="mailto:thalis@example.com">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Mail className="h-5 w-5" />
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
