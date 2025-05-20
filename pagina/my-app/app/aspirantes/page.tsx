import EspecialidadesSection from "@/components/especialidades-section";
import PlanEstudiosSection from "@/components/plan-estudios-section";
import FichasSection from "@/components/fichas-section";
import ContactoSection from "@/components/contacto-section";

export default function AspirantesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-8 py-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
      
      {/* Hero Section: ocupa las 4 columnas */}
      <section className="md:col-span-4 max-w-4xl mx-auto text-center px-8 mb-20">
        <h1 className="text-5xl font-extrabold mb-6 tracking-tight text-blue-900 dark:text-blue-400 leading-tight">
          Bienvenido <span className="text-blue-600 dark:text-blue-300">Aspirante</span> al ITSOEH
        </h1>
        <hr className="border-gray-300 dark:border-gray-700 w-24 mx-auto mb-10" />
        <p className="text-lg max-w-3xl mx-auto leading-relaxed font-light text-gray-700 dark:text-gray-300">
          El Instituto Tecnológico Superior del Oriente del Estado de Hidalgo te invita a formar parte de una comunidad comprometida con la calidad educativa, innovación y tecnología. Aquí encontrarás todo lo que necesitas para iniciar tu camino académico.
        </p>
      </section>

      {/* Sidebar Navegación */}
      <aside className="md:col-span-1 sticky top-28 self-start bg-white dark:bg-gray-800 rounded-lg shadow-md p-10 border border-gray-200 dark:border-gray-700 max-h-[calc(100vh-7rem)] overflow-y-auto">
        <h2 className="text-2xl font-semibold mb-8 border-b border-blue-600 dark:border-blue-400 pb-3 text-blue-700 dark:text-blue-300">
          Navegación
        </h2>
        <nav className="flex flex-col space-y-6 text-lg font-medium">
          <a
            href="#especialidades"
            className="rounded-md px-5 py-3 hover:bg-blue-100 dark:hover:bg-blue-900 text-blue-800 dark:text-blue-300 transition"
          >
            Especialidades
          </a>
          <a
            href="#plan-estudios"
            className="rounded-md px-5 py-3 hover:bg-blue-100 dark:hover:bg-blue-900 text-blue-800 dark:text-blue-300 transition"
          >
            Plan de Estudios
          </a>
          <a
            href="#fichas"
            className="rounded-md px-5 py-3 hover:bg-blue-100 dark:hover:bg-blue-900 text-blue-800 dark:text-blue-300 transition"
          >
            Fichas de Admisión
          </a>
          <a
            href="#contacto"
            className="rounded-md px-5 py-3 hover:bg-blue-100 dark:hover:bg-blue-900 text-blue-800 dark:text-blue-300 transition"
          >
            Contacto
          </a>
        </nav>
      </aside>

      {/* Contenido Principal */}
      <main className="md:col-span-3 space-y-24">
        <section id="especialidades" className="scroll-mt-28 bg-white dark:bg-gray-800 rounded-lg shadow-md p-12 border border-gray-200 dark:border-gray-700 max-w-5xl mx-auto">
          <EspecialidadesSection />
        </section>

        <section id="plan-estudios" className="scroll-mt-28 bg-white dark:bg-gray-800 rounded-lg shadow-md p-12 border border-gray-200 dark:border-gray-700 max-w-5xl mx-auto">
          <PlanEstudiosSection />
        </section>

        <section id="fichas" className="scroll-mt-28 bg-white dark:bg-gray-800 rounded-lg shadow-md p-12 border border-gray-200 dark:border-gray-700 max-w-5xl mx-auto">
          <FichasSection />
        </section>

        <section id="contacto" className="scroll-mt-28 bg-white dark:bg-gray-800 rounded-lg shadow-md p-12 border border-gray-200 dark:border-gray-700 max-w-5xl mx-auto">
          <ContactoSection />
        </section>
      </main>
    </div>
  );
}
