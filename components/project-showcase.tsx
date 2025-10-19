import { ProjectCard } from "@/components/project-card"

interface ProjectShowcaseProps {
  limit?: number
}

export function ProjectShowcase({ limit }: ProjectShowcaseProps) {
  // Dados de exemplo para os projetos
  const projects = [
    {
      id: 1,
      title: "ORM",
      description: "Plataforma de e-commerce completa com sistema de pagamentos integrado",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["PHP", "Vault", "MinIo", "RabbitMQ", "PDO", "Postgres", "Docker"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com/apenasthalis/ORM",
    },
    {
      id: 2,
      title: "Trainer App",
      description: "Aplicativo de gerenciamento de treinos de academia",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["React", "Next.js", "Tailwind CSS"],
      demoUrl: "https://v0-academia-gerenciamento.vercel.app/",
      githubUrl: "https://github.com/apenasthalis/trainer-app",
    },
    {
      id: 3,
      title: "Calculadora",
      description: "Calculadora funcional",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["HTML", "CSS", "Javascript"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com/apenasthalis/calculadora",
    },
  ]

  // Limita o número de projetos exibidos se o limite for fornecido
  const displayedProjects = limit ? projects.slice(0, limit) : projects

  return (
    <div className="gap-6 grid sm:grid-cols-2 lg:grid-cols-3">
      {displayedProjects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          image={project.image}
          tags={project.tags}
          demoUrl={project.demoUrl}
          githubUrl={project.githubUrl}
        />
      ))}
    </div>
  )
}
