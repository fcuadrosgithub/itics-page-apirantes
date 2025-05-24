import Image from "next/image"

export default function PlanPage() {
  return (
    <div className="text-center max-w-4xl mx-auto px-4">
      <p className="text-muted-foreground mb-6 text-lg">
        Esta es la retícula correspondiente al plan de estudios de la carrera de Ingeniería en Tecnologías de la Información y Comunicaciones (ITICS).
      </p>

      <div className="relative w-full h-[700px]">
        <Image
          src="/reticula.jpg" // tu imagen ya está en public, así que este path es correcto
          alt="Retícula ITICS"
          fill
          className="object-contain"
        />
      </div>
    </div>
  )
}
