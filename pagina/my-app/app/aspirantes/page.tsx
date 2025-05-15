import Link from "next/link";
import { BookOpen, Briefcase, FileText, Phone } from "lucide-react";

import EspecialidadesSection from "@/components/especialidades-section";
import PlanEstudiosSection from "@/components/plan-estudios-section";
import FichasSection from "@/components/fichas-section";
import ContactoSection from "@/components/contacto-section";

export default function AspirantesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header - Azul vibrante (#1E88E5) */}
      <header className="bg-[#1E88E5] text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4">
                <span className="text-[#1E88E5] font-bold text-2xl">TECNM</span>
              </div>
              <h1 className="text-2xl font-bold">Tecnológico Nacional de México</h1>
            </div>
            <nav className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="hover:underline font-medium">
                Inicio
              </Link>
              <Link href="/alumnos" className="hover:underline font-medium">
                Alumnos
              </Link>
              <Link href="/docentes" className="hover:underline font-medium">
                Docentes
              </Link>
              <Link href="/aspirantes" className="hover:underline font-medium">
                Aspirantes
              </Link>
              <Link href="/publico" className="hover:underline font-medium">
                Público en General
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Sección Hero - Azul claro (#42A5F5) */}
      <div className="bg-[#42A5F5] text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Aspirantes</h1>
          <p className="text-xl max-w-3xl">
            Información importante para quienes desean formar parte de nuestra comunidad universitaria.
          </p>
        </div>
      </div>

      {/* Contenido principal - Fondo azul muy claro (#E3F2FD) */}
      <main className="flex-1 py-12 bg-[#E3F2FD]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Sidebar - Blanco con acentos azules */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
                <h2 className="text-xl font-bold text-[#1E88E5] mb-6">Secciones</h2>
                <nav className="space-y-2">
                  <a
                    href="#especialidades"
                    className="flex items-center p-2 text-gray-700 hover:bg-blue-50 rounded-md"
                  >
                    <Briefcase className="mr-2 h-5 w-5 text-[#90CAF9]" />
                    <span>Áreas de Especialidad</span>
                  </a>
                  <a 
                    href="#plan-estudios" 
                    className="flex items-center p-2 text-gray-700 hover:bg-blue-50 rounded-md"
                  >
                    <BookOpen className="mr-2 h-5 w-5 text-[#90CAF9]" />
                    <span>Plan de Estudios</span>
                  </a>
                  <a 
                    href="#fichas" 
                    className="flex items-center p-2 text-gray-700 hover:bg-blue-50 rounded-md"
                  >
                    <FileText className="mr-2 h-5 w-5 text-[#90CAF9]" />
                    <span>Fichas de Admisión</span>
                  </a>
                  <a 
                    href="#contacto" 
                    className="flex items-center p-2 text-gray-700 hover:bg-blue-50 rounded-md"
                  >
                    <Phone className="mr-2 h-5 w-5 text-[#90CAF9]" />
                    <span>Contacto</span>
                  </a>
                </nav>
              </div>
            </div>

            {/* Contenido principal */}
            <div className="md:col-span-3 space-y-12">
              <section id="especialidades" className="scroll-mt-24">
                <EspecialidadesSection />
              </section>

              <section id="plan-estudios" className="scroll-mt-24">
                <PlanEstudiosSection />
              </section>

              <section id="fichas" className="scroll-mt-24">
                <FichasSection />
              </section>

              <section id="contacto" className="scroll-mt-24">
                <ContactoSection />
              </section>
            </div>
          </div>
        </div>
      </main>

      {/* Footer - Mismo azul que el header (#1E88E5) */}
      <footer className="bg-[#1E88E5] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Tecnológico Nacional de México</h3>
              <p>Av. Universidad 123, Col. Centro</p>
              <p>Ciudad de México, México</p>
              <p>CP 12345</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contacto</h3>
              <p>Teléfono: (55) 1234-5678</p>
              <p>Email: contacto@upmx.edu.mx</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/directorio" className="hover:underline">
                    Directorio
                  </Link>
                </li>
                <li>
                  <Link href="/mapa" className="hover:underline">
                    Mapa del Campus
                  </Link>
                </li>
                <li>
                  <Link href="/calendario" className="hover:underline">
                    Calendario Académico
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p>© {new Date().getFullYear()} Tecnológico Nacional de México. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}