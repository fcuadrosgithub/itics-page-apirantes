import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function Home() {
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
              <Link href="/" className="hover:underline font-medium hover:text-blue-100 transition">
                Inicio
              </Link>
              <Link href="/alumnos" className="hover:underline font-medium hover:text-blue-100 transition">
                Alumnos
              </Link>
              <Link href="/docentes" className="hover:underline font-medium hover:text-blue-100 transition">
                Docentes
              </Link>
              <Link href="/aspirantes" className="hover:underline font-medium hover:text-blue-100 transition">
                Aspirantes
              </Link>
              <Link href="/publico" className="hover:underline font-medium hover:text-blue-100 transition">
                Público en General
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section - Azul cielo (#42A5F5) */}
        <section className="bg-[#42A5F5] text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Bienvenidos al Tecnológico Nacional de México</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Formando profesionales comprometidos con el desarrollo de México
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/aspirantes"
                className="bg-white text-[#1E88E5] px-6 py-3 rounded-md font-bold hover:bg-blue-50 transition shadow-md"
              >
                Información para Aspirantes
              </Link>
              <Link
                href="/oferta-academica"
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-bold hover:bg-white/20 transition"
              >
                Oferta Académica
              </Link>
            </div>
          </div>
        </section>

        {/* Accesos Directos - Fondo azul claro (#E3F2FD) */}
        <section className="py-16 bg-[#E3F2FD]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#1E88E5]">Accesos Directos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Link href="/alumnos" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition hover:border-[#90CAF9] border-2 border-transparent">
                <h3 className="text-xl font-bold text-[#1E88E5] mb-2">Alumnos</h3>
                <p className="text-gray-600 mb-4">
                  Accede a información académica, horarios y servicios estudiantiles.
                </p>
                <div className="flex items-center text-[#42A5F5] font-medium">
                  <span>Ingresar</span>
                  <ChevronRight className="ml-1 h-4 w-4" />
                </div>
              </Link>
              <Link href="/docentes" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition hover:border-[#90CAF9] border-2 border-transparent">
                <h3 className="text-xl font-bold text-[#1E88E5] mb-2">Docentes</h3>
                <p className="text-gray-600 mb-4">Portal para profesores, recursos didácticos y gestión académica.</p>
                <div className="flex items-center text-[#42A5F5] font-medium">
                  <span>Ingresar</span>
                  <ChevronRight className="ml-1 h-4 w-4" />
                </div>
              </Link>
              <Link
                href="/aspirantes"
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-2 border-[#42A5F5] hover:border-[#1E88E5]"
              >
                <h3 className="text-xl font-bold text-[#1E88E5] mb-2">Aspirantes</h3>
                <p className="text-gray-600 mb-4">Información sobre admisión, carreras y proceso de inscripción.</p>
                <div className="flex items-center text-[#42A5F5] font-medium">
                  <span>Ingresar</span>
                  <ChevronRight className="ml-1 h-4 w-4" />
                </div>
              </Link>
              <Link href="/publico" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition hover:border-[#90CAF9] border-2 border-transparent">
                <h3 className="text-xl font-bold text-[#1E88E5] mb-2">Público en General</h3>
                <p className="text-gray-600 mb-4">Eventos, noticias y servicios para la comunidad.</p>
                <div className="flex items-center text-[#42A5F5] font-medium">
                  <span>Ingresar</span>
                  <ChevronRight className="ml-1 h-4 w-4" />
                </div>
              </Link>
            </div>
          </div>
        </section>
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
              <p>Email: contacto@tecnm.edu.mx</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/directorio" className="hover:text-blue-200 transition">
                    Directorio
                  </Link>
                </li>
                <li>
                  <Link href="/mapa" className="hover:text-blue-200 transition">
                    Mapa del Campus
                  </Link>
                </li>
                <li>
                  <Link href="/calendario" className="hover:text-blue-200 transition">
                    Calendario Académico
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-400 mt-8 pt-8 text-center">
            <p>© {new Date().getFullYear()} Tecnológico Nacional de México. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}