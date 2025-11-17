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
      image: "/orm.png?height=300&width=600",
      tags: ["PHP", "Vault", "MinIo", "RabbitMQ", "PDO", "Postgres", "Docker"],
      demoUrl: "https://github.com/apenasthalis/ORM",
      githubUrl: "https://github.com/apenasthalis/ORM",
    },
    {
      id: 2,
      title: "Trainer App",
      description: "Aplicativo de gerenciamento de treinos de academia",
      image: "/gymtracker.png?height=300&width=600",
      tags: ["React", "Next.js", "Tailwind CSS"],
      demoUrl: "https://v0-academia-gerenciamento.vercel.app/",
      githubUrl: "https://github.com/apenasthalis/trainer-app",
    },
    {
      id: 3,
      title: "Networker Group",
      description: "Plataforma de Gestão para Grupos de Networking",
      image: "/networkergroup.png?height=300&width=600",
      tags: ["Next.Js", "TailwindCSS", "Typescript", "Node.js", "Express", "Postgres", "Prisma", "PostgreSQL", "Jest"],
      demoUrl: "https://github.com/apenasthalis/networkerGroup",
      githubUrl: "https://github.com/apenasthalis/networkerGroup",
    },
    {
      id: 4,
      title: "Calculadora",
      description: "Calculadora funcional",
      image: "/calculator.png?height=300&width=600",
      tags: ["HTML", "CSS", "Javascript"],
      demoUrl: "https://calculadora-gamma-wheat.vercel.app/",
      githubUrl: "https://github.com/apenasthalis/calculadora",
    },
    {
      id: 5,
      title: "Networker Group",
      description: "Plataforma de Gestão para Grupos de Networking",
      image: "/networkergroup.png?height=300&width=600",
      tags: ["Next.Js", "TailwindCSS", "Typescript", "Node.js", "Express", "Prisma", "PostgreSQL", "Jest"],
      demoUrl: "https://github.com/apenasthalis/networkerGroup",
      githubUrl: "https://github.com/apenasthalis/networkerGroup",
    },
        {
      id: 6,
      title: "API Multigateway",
      description: "API para gerenciamento de múltiplos gateways de pagamento",
      image: "/api-multigateway.png?height=300&width=600",
      tags: ["PHP", "Integration", "Composer", "Docker", "Nginx", "PostgreSQL"],
      demoUrl: "https://github.com/apenasthalis/api-multi-gateway",
      githubUrl: "https://github.com/apenasthalis/api-multi-gateway",
    },
  ]

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
