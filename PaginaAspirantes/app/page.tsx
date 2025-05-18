import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, GraduationCap, Users, BookOpen, Award, Globe } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-primary py-20 text-primary-foreground">
        <div className="container flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Instituto Tecnológico Superior del Occidente del Estado de Hidalgo
          </h1>
          <p className="mt-6 max-w-3xl text-lg">
            Formando profesionales competitivos con educación de calidad para el desarrollo sustentable de la región.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/aspirantes">Conoce nuestras carreras</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/aspirantes/contacto">Contáctanos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Explora nuestras secciones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SectionCard
              title="Aspirantes"
              description="Información para futuros estudiantes sobre nuestras carreras, proceso de admisión y más."
              icon={<GraduationCap className="h-10 w-10" />}
              href="/aspirantes"
            />
            <SectionCard
              title="Docentes"
              description="Recursos para nuestro personal académico, horarios, capacitaciones y más."
              icon={<Users className="h-10 w-10" />}
              href="/docentes"
            />
            <SectionCard
              title="Alumnos"
              description="Servicios para estudiantes actuales, calendario escolar, trámites y más."
              icon={<BookOpen className="h-10 w-10" />}
              href="/alumnos"
            />
            <SectionCard
              title="Egresados"
              description="Seguimiento a egresados, bolsa de trabajo, educación continua y más."
              icon={<Award className="h-10 w-10" />}
              href="/egresados"
            />
            <SectionCard
              title="Público"
              description="Información general, eventos, noticias y servicios para la comunidad."
              icon={<Globe className="h-10 w-10" />}
              href="/publico"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

function SectionCard({
  title,
  description,
  icon,
  href,
}: {
  title: string
  description: string
  icon: React.ReactNode
  href: string
}) {
  return (
    <Card className="transition-all hover:shadow-md">
      <CardHeader>
        <div className="mb-2 text-primary">{icon}</div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button asChild variant="ghost" className="w-full justify-between">
          <Link href={href}>
            Explorar <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
