"use client"

import Link from "next/link"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { usePathname } from "next/navigation"
import type React from "react"

const aspirantesNavItems = [
  { name: "Áreas de Especialización", href: "/aspirantes/areas" },
  { name: "Plan de Estudios", href: "/aspirantes/plan" },
  { name: "Ficha de Admisión", href: "/aspirantes/ficha" },
  { name: "Contacto", href: "/aspirantes/contacto" },
]

export default function AspirantesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Aspirantes</h1>
        <p className="text-muted-foreground max-w-3xl">
          Bienvenido a la sección de aspirantes del la carrera de Ingeniería en Tecnologías de la Información y Comunicaciones.
          Aquí encontrarás toda la información necesaria para iniciar tu proceso de admisión.
        </p>
        {/* Link de regreso al inicio */}
        <Link
          href="/"
          className="inline-block mt-4 text-blue-600 hover:underline"
        >
          ← Volver a la página principal
        </Link>
      </div>

      <AspirantesNavigation />

      <div className="mt-8">{children}</div>
    </div>
  )
}

function AspirantesNavigation() {
  const pathname = usePathname()

  return (
    <Tabs defaultValue={getActiveTab(pathname)} className="w-full">
      <TabsList className="w-full md:w-auto grid grid-cols-2 md:flex md:flex-wrap gap-2">
        {aspirantesNavItems.map((item) => (
          <TabsTrigger
            key={item.href}
            value={item.href}
            asChild
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            <Link href={item.href}>{item.name}</Link>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
}

function getActiveTab(pathname: string) {
  if (pathname === "/aspirantes") return "/aspirantes/areas"
  return pathname
}
