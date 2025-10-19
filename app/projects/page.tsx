import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProjectShowcase } from "@/components/project-showcase"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Navbar />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6">
        <section className="py-12 md:py-24 space-y-12">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Meus Projetos</h1>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
              Conheça os projetos que desenvolvi ao longo da minha carreira
            </p>
          </div>

          <ProjectShowcase />
        </section>
      </main>
      <Footer />
    </div>
  )
}
