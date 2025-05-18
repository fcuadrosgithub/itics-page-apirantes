import Image from "next/image"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

const carreras = [
  {
    id: "civil",
    nombre: "Ingeniería Civil",
    descripcion: "Forma profesionales capaces de planear, diseñar, construir y mantener obras de infraestructura.",
    imagen: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "industrial",
    nombre: "Ingeniería Industrial",
    descripcion: "Optimiza procesos, sistemas y organizaciones para mejorar la calidad, productividad y competitividad.",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW_yyIxndkFHsWU5A1xA5-W5QT2D6Lwq3WhQ&s",
  },
  {
    id: "alimentarias",
    nombre: "Ingeniería en Industrias Alimentarias",
    descripcion: "Desarrolla y mejora procesos de producción, conservación y transformación de alimentos.",
    imagen: "https://usil-blog.s3.amazonaws.com/PROD/styles/list_styles_blogs/public/blog/image/ingenieria-alimentos-relacion-alimentos-funcionales.jpg?itok=ghqnYJGp",
  },
  {
    id: "electromecanica",
    nombre: "Ingeniería en Electromecánica",
    descripcion: "Diseña, instala y mantiene sistemas electromecánicos para la industria.",
    imagen: "https://minatitlan.tecnm.mx/wp-content/uploads/2022/11/141.jpeg",
  },
  {
    id: "sistemas",
    nombre: "Ingeniería en Sistemas Computacionales",
    descripcion: "Desarrolla software, administra redes y sistemas de información para resolver problemas organizacionales.",
    imagen: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "gestion",
    nombre: "Ingeniería en Gestión Empresarial",
    descripcion: "Forma líderes innovadores capaces de diseñar, implementar y evaluar sistemas estratégicos de negocios.",
    imagen: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/Y7RRMYMSLVABPN3RADJE3PED6Y.jpg",
  },
  {
    id: "arquitectura",
    nombre: "Arquitectura",
    descripcion: "Diseña espacios habitables, funcionales y estéticos que responden a necesidades sociales y ambientales.",
    imagen: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "tic",
    nombre: "Ingeniería en Tecnologías de la Información y Comunicaciones",
    descripcion: "Gestiona y desarrolla tecnologías de información para optimizar procesos en las organizaciones.",
    imagen: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "logistica",
    nombre: "Ingeniería en Logística",
    descripcion: "Diseña y optimiza sistemas logísticos para mejorar la cadena de suministro en las organizaciones.",
    imagen: "https://blogs.unitec.mx/hubfs/Imported_Blog_Media/que-hace-un-ingeniero-en-logistica-1-Dec-17-2022-08-18-36-1794-PM.jpg",
  },
]

export default function AreasPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Áreas de Especialización</h2>
      <p className="mb-8 text-muted-foreground">
        El Instituto Tecnológico Superior del Occidente del Estado de Hidalgo ofrece diversas carreras de ingeniería y
        arquitectura para formar profesionales competitivos en diferentes áreas.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {carreras.map((carrera) => (
          <Card key={carrera.id} className="overflow-hidden">
            <div className="aspect-video relative">
              <Image src={carrera.imagen || "/placeholder.svg"} alt={carrera.nombre} fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle>{carrera.nombre}</CardTitle>
              <CardDescription>{carrera.descripcion}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button variant="outline" className="w-full justify-between">
                Más información <ChevronRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
