import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SkillsShowcase } from "@/components/skills-showcase"
import { SkillCategory } from "@/components/skill-category"

export default function SkillsPage() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <Navbar />
      <main className="flex-1 mx-auto px-4 sm:px-6 w-full max-w-7xl">
        <section className="space-y-12 py-12 md:py-24">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl tracking-tighter">Minhas Habilidades</h1>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
              Tecnologias e ferramentas que domino e utilizo em meus projetos
            </p>
          </div>

          <div className="space-y-12">
            <SkillCategory
              title="Front-end"
              skills={[
                { name: "HTML5", level: 95 },
                { name: "CSS3", level: 90 },
                { name: "JQuery", level: 90 },
                { name: "JavaScript", level: 80 },
                { name: "TypeScript", level: 95 },
                { name: "React", level: 90 },
                { name: "Next.js", level: 95 },
                { name: "Vue.js", level: 90 },
                { name: "Tailwind CSS", level: 80 },
                { name: "Styled Components", level: 60 },
                { name: "Bootstrap", level: 60 },
              ]}
            />

            <SkillCategory
              title="Back-end"
              skills={[
                { name: "Node.js", level: 100 },
                { name: "Express.js", level: 95 },
                { name: "PHP", level: 100 },
                { name: "Laravel", level: 100 },
                { name: "Laminas", level: 95 },
                { name: "Nest.js", level: 95 },
                { name: "Prisma.js", level: 95 },
              ]}
            />

            <SkillCategory
              title="Banco de Dados"
              skills={[
                { name: "MySQL", level: 80 },
                { name: "PostgreSQL", level: 95 },
                { name: "Redis", level: 80 },
                { name: "Oracle", level: 70 },
              ]}
            />

            <SkillCategory
              title="DevOps & Ferramentas"
              skills={[
                { name: "Git", level: 95 },
                { name: "Docker", level: 95 },
                { name: "CI/CD", level: 90 },
                { name: "Jenkins", level: 50 },
                { name: "Vault", level: 70 },
                { name: "Rabbitmq", level: 80 },
              ]}
            />
          </div>

          <div className="pt-8">
            <SkillsShowcase />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
