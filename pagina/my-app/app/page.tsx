import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sección bienvenida */}
      <section className="bg-[#003865] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Bienvenido al ITSOEH</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Tecnológico Nacional de México Campus Huejutla – Formando profesionistas comprometidos con el desarrollo tecnológico y social del país.
        </p>
      </section>

      {/* Acerca de */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">¿Quiénes somos?</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          El Instituto Tecnológico Superior del Oriente del Estado de Hidalgo es una institución pública de educación superior
          dedicada a la formación de ingenieros e ingenieras altamente capacitados en áreas clave del conocimiento,
          promoviendo la innovación, el emprendimiento y el compromiso con la sociedad.
        </p>
      </section>

      {/* Oferta académica */}
      <section className="bg-[#F4F6F8] dark:bg-[#1F2937] py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Oferta Académica</h2>
          <div className="grid gap-6 md:grid-cols-3 text-left">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Ingeniería en Sistemas Computacionales</h3>
              <p>Enfocada en el diseño, desarrollo y mantenimiento de software y sistemas informáticos.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Ingeniería Industrial</h3>
              <p>Optimización de procesos productivos, gestión de calidad y mejora continua en industrias.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Ingeniería en Gestión Empresarial</h3>
              <p>Formación en administración, finanzas y liderazgo con visión estratégica.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Noticias (simuladas) */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Noticias Recientes</h2>
        <ul className="space-y-4 text-left">
          <li className="border-l-4 border-blue-600 pl-4">
            <span className="font-semibold">15 de mayo 2025:</span> Ceremonia del Día del Maestro y entrega de reconocimientos a docentes.
          </li>
          <li className="border-l-4 border-blue-600 pl-4">
            <span className="font-semibold">10 de mayo 2025:</span> ITSOEH obtiene reconocimiento por su participación en el Evento Nacional Estudiantil de Innovación Tecnológica.
          </li>
        </ul>
      </section>

      {/* Accesos rápidos */}
      <section className="py-16 bg-[#E5E7EB] dark:bg-gray-900 text-center px-6">
        <h2 className="text-2xl font-semibold mb-4">Accesos rápidos</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Link href="/alumnos" className="bg-[#005EB8] hover:bg-[#004a94] text-white px-6 py-3 rounded-xl transition">
            Alumnos
          </Link>
          <Link href="/docentes" className="bg-[#005EB8] hover:bg-[#004a94] text-white px-6 py-3 rounded-xl transition">
            Docentes
          </Link>
          <Link href="/aspirantes" className="bg-[#005EB8] hover:bg-[#004a94] text-white px-6 py-3 rounded-xl transition">
            Aspirantes
          </Link>
          <Link href="/publico" className="bg-[#005EB8] hover:bg-[#004a94] text-white px-6 py-3 rounded-xl transition">
            Público
          </Link>
        </div>
      </section>

      {/* Frase institucional */}
      <section className="py-10 text-center text-gray-600 dark:text-gray-300 text-lg italic px-6">
        “Excelencia académica con compromiso social”
      </section>
    </div>
  );
}
