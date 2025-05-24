import Image from "next/image"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

const areasTIC = [
  {
    id: "redes",
    nombre: "Redes y Telecomunicaciones",
    descripcion: "Diseño, configuración y mantenimiento de redes de datos y servicios de telecomunicación.",
    imagen: "/redes.jpg",
  },
  {
    id: "software",
    nombre: "Desarrollo de Software",
    descripcion: "Creación de aplicaciones web, móviles y de escritorio utilizando metodologías ágiles y tecnologías modernas.",
    imagen: "/soft.jpg",
  },
  {
    id: "iot",
    nombre: "Internet de las Cosas (IoT)",
    descripcion: "Diseño e implementación de sistemas conectados que recopilan y transmiten datos desde sensores inteligentes.",
    imagen: "/nube.jpg",
  },
  {
    id: "seguridad",
    nombre: "Ciberseguridad",
    descripcion: "Protección de sistemas informáticos contra amenazas mediante técnicas de seguridad ofensiva y defensiva.",
    imagen: "/ciber.jpg",
  },
  {
    id: "robotica",
    nombre: "Robótica",
    descripcion: "Diseño, desarrollo y control de sistemas robóticos aplicando electrónica, programación y automatización.",
    imagen: "/robo.jpg",
  },
  {
    id: "sistemas",
    nombre: "Sistemas Computacionales",
    descripcion: "Diseño, desarrollo e implementación de soluciones informáticas incluyendo software, hardware y redes.",
    imagen: "/compu.jpg",
  },
  {
    id: "cloud",
    nombre: "Computación en la Nube",
    descripcion: "Implementación de soluciones escalables en plataformas cloud como AWS, Azure y Google Cloud.",
    imagen: "/nubee.jpg",
  },
  {
    id: "embebidos",
    nombre: "Sistemas Embebidos",
    descripcion: "Programación de microcontroladores y diseño de hardware para aplicaciones electrónicas.",
    imagen: "/embe.jpg",
  },
]

export default function AreasPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Áreas de Especialización ITICS</h2>
      <p className="mb-8 text-muted-foreground">
        La carrera de Ingeniería en Tecnologías de la Información y Comunicaciones ofrece formación en diversas áreas para el desarrollo integral de soluciones tecnológicas.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {areasTIC.map((area) => (
          <Card key={area.id} className="overflow-hidden">
            <div className="aspect-video relative">
              <Image src={area.imagen || "/placeholder.svg"} alt={area.nombre} fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle>{area.nombre}</CardTitle>
              <CardDescription>{area.descripcion}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}
