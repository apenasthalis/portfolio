import { Card, CardContent } from "@/components/ui/card"
import { Code2, Database, Globe, Palette, Server, Smartphone, Terminal, TestTube } from "lucide-react"

export function SkillsShowcase() {
  const skills = [
    {
      icon: <Code2 className="w-8 h-8" />,
      name: "Front-end",
      technologies: "React, Next.js, HTML, CSS, JavaScript, TypeScript, JQuery",
    },
    {
      icon: <Server className="w-8 h-8" />,
      name: "Back-end",
      technologies: "Node.js, Express, PHP, Laravel, Laminas",
    },
    {
      icon: <Database className="w-8 h-8" />,
      name: "Banco de Dados",
      technologies: "MySQL, PostgreSQL, Redis",
    },
    // {
    //   icon: <Smartphone className="w-8 h-8" />,
    //   name: "Mobile",
    //   technologies: "React Native, Flutter",
    // },
    {
      icon: <Palette className="w-8 h-8" />,
      name: "UI/UX",
      technologies: "Figma, Tailwind CSS, Styled Components, Bootstrap",
    },
    {
      icon: <Terminal className="w-8 h-8" />,
      name: "DevOps",
      technologies: "Git, Docker, Jenkins, CI/CD, Vault",
    },
    {
      icon: <TestTube className="w-8 h-8" />,
      name: "Testes",
      technologies: "Jest,PHPUnit",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      name: "Outros",
      technologies: "REST API, GraphQL",
    },
  ]

  return (
    <div className="gap-6 grid sm:grid-cols-2 lg:grid-cols-4">
      {skills.map((skill, index) => (
        <Card key={index} className="overflow-hidden">
          <CardContent className="flex flex-col items-center space-y-4 p-6 text-center">
            <div className="bg-slate-100 p-2 rounded-full">{skill.icon}</div>
            <div>
              <h3 className="font-bold text-xl">{skill.name}</h3>
              <p className="mt-2 text-gray-500 text-sm">{skill.technologies}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
