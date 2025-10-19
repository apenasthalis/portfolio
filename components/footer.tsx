import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="border-t bg-background w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
        <div className="flex flex-col gap-2">
          <Link href="/" className="text-lg font-bold">
            Thalis Gabriel
          </Link>
          <p className="text-sm text-gray-500">Desenvolvedor Full Stack apaixonado por criar soluções inovadoras</p>
        </div>

        <nav className="flex gap-4 md:gap-6">
          <Link href="/" className="text-sm font-medium text-gray-500 hover:text-gray-900">
            Início
          </Link>
          <Link href="/about" className="text-sm font-medium text-gray-500 hover:text-gray-900">
            Sobre
          </Link>
          <Link href="/projects" className="text-sm font-medium text-gray-500 hover:text-gray-900">
            Projetos
          </Link>
          <Link href="/skills" className="text-sm font-medium text-gray-500 hover:text-gray-900">
            Habilidades
          </Link>
        </nav>

        <div className="flex gap-4">
          <Link href="https://github.com/thalisgabriel" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link href="https://linkedin.com/in/thalisgabriel" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>
          <Link href="mailto:thalis@example.com">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
          </Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 text-center text-sm text-gray-500 border-t">
        &copy; {new Date().getFullYear()} Thalis Gabriel. Todos os direitos reservados.
      </div>
    </footer>
  )
}
