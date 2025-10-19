import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Download } from "lucide-react"

import { Button } from "@/components/ui/button"

// Ajustar a estrutura do Hero Section para centralizar o conteúdo
export function HeroSection() {
  return (
    <section className="py-12 md:py-24 lg:py-32 xl:py-48 w-full">
      <div className="gap-8 lg:gap-12 grid lg:grid-cols-2">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter">Thalis Gabriel</h1>
            <p className="text-gray-500 text-xl md:text-2xl">Desenvolvedor Full Stack</p>
          </div>
          <p className="max-w-[600px] text-gray-500 lg:text-base/relaxed md:text-xl/relaxed xl:text-xl/relaxed">
            Transformando ideias em soluções digitais inovadoras. Especializado em desenvolvimento web e mobile com foco
            em performance e experiência do usuário.
          </p>
          <div className="flex min-[400px]:flex-row flex-col gap-2">
            <Link href="/projects">
              <Button size="lg" className="gap-2">
                Ver projetos
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/files/cv.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="gap-2">
                Download CV
                <Download className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="relative rounded-lg w-full max-w-[500px] aspect-square overflow-hidden">
            <Image
              src="/thalis.jpeg?height=500&width=500"
              alt="Thalis Gabriel"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
