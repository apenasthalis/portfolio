import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, GraduationCap, Briefcase } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <Navbar />
      <main className="flex-1 mx-auto px-4 sm:px-6 w-full max-w-7xl">
        <section className="space-y-12 py-12 md:py-24">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl tracking-tighter">Sobre Mim</h1>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
              Conheça um pouco mais sobre minha trajetória e paixão pelo desenvolvimento
            </p>
          </div>

          <div className="gap-8 lg:gap-12 grid lg:grid-cols-2">
            <div className="flex justify-center">
              <div className="relative rounded-lg w-full max-w-[400px] aspect-square overflow-hidden">
                <Image
                  src="/thalis.jpeg?height=400&width=400"
                  alt="Thalis Gabriel"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="font-bold text-3xl">Thalis Gabriel</h2>
              <p className="text-gray-500 text-xl">Desenvolvedor Full Stack</p>
              <p className="text-gray-500">
                Sou um desenvolvedor apaixonado por criar soluções inovadoras e funcionais. Com experiência em
                desenvolvimento web e mobile, busco sempre aprender novas tecnologias e aprimorar minhas habilidades
                para entregar projetos de alta qualidade.
              </p>
              <p className="text-gray-500">
                Minha jornada na programação começou há alguns anos, e desde então tenho trabalhado em diversos projetos
                que me permitiram desenvolver um conjunto diversificado de habilidades técnicas e uma compreensão
                profunda dos princípios de desenvolvimento de software.
              </p>
              <div className="flex gap-4">
                <Link href="/projects">
                  <Button className="gap-2">
                    Ver projetos
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/skills">
                  <Button variant="outline" className="gap-2">
                    Minhas habilidades
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="font-bold text-3xl text-center">Experiência Profissional</h2>
            <div className="gap-6 grid">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      <Briefcase className="w-5 h-5 text-gray-500" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center">
                        <h3 className="font-bold text-xl">Desenvolvedor Full Stack</h3>
                        <div className="flex items-center gap-1 text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <span>2022 - Presente</span>
                        </div>
                      </div>
                      <p className="text-gray-500">Empresa Ipê Web</p>
                      <p>
                        Desenvolvimento de aplicações web utilizando PHP, Laravel, Zend/Laminas, JQuery, Javascript e bancos de dados SQL e NoSQL.
                        {/* Implementação de APIs RESTful e integração com serviços de terceiros. */}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="font-bold text-3xl text-center">Formação Acadêmica</h2>
            <div className="gap-6 grid">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      <GraduationCap className="w-5 h-5 text-gray-500" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center">
                        <h3 className="font-bold text-xl">Bacharelado em Sistemas De informação</h3>
                        <div className="flex items-center gap-1 text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <span>2023 - 2027</span>
                        </div>
                      </div>
                      <p className="text-gray-500">Universidade Uniasselvi</p>
                      <p>
                        Formação em andamento em Sistemas De informação, com foco em desenvolvimento de software, algoritmos,
                        estruturas de dados e engenharia de software.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
