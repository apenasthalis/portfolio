import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-background border-t w-full">
      <div className="flex md:flex-row flex-col md:justify-between md:items-center gap-6 mx-auto px-4 sm:px-6 py-8 md:py-12 max-w-7xl">
        <div className="flex flex-col gap-2">
          <Link href="/" className="font-bold text-lg">
            Thalis Gabriel
          </Link>
          <p className="text-gray-500 text-sm">Desenvolvedor Full Stack apaixonado por criar soluções inovadoras</p>
        </div>

        <nav className="flex gap-4 md:gap-6">
          <Link href="/" className="font-medium text-gray-500 hover:text-gray-900 text-sm">
            Início
          </Link>
          <Link href="/about" className="font-medium text-gray-500 hover:text-gray-900 text-sm">
            Sobre
          </Link>
          <Link href="/projects" className="font-medium text-gray-500 hover:text-gray-900 text-sm">
            Projetos
          </Link>
          <Link href="/skills" className="font-medium text-gray-500 hover:text-gray-900 text-sm">
            Habilidades
          </Link>
        </nav>

        <div className="flex gap-4">
          <Link href="https://github.com/apenasthalis" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/thalis-gabriel/" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>
          <Link href="mailto:1thalisgabriel1@gmail.com">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Mail className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </Button>
          </Link>
        </div>
      </div>
      <div className="mx-auto px-4 sm:px-6 py-4 border-t max-w-7xl text-gray-500 text-sm text-center">
        &copy; {new Date().getFullYear()} Thalis Gabriel. Todos os direitos reservados.
      </div>
    </footer>
  )
}
