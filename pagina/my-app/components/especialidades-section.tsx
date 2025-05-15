import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EspecialidadesSection() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-[#1B396A] mb-6">Áreas de Especialidad</h2>
      <p className="text-gray-700 mb-8">
        Nuestra universidad ofrece diversas áreas de especialidad para que puedas desarrollarte profesionalmente en el
        campo que más te apasione.
      </p>

      <Tabs defaultValue="ingenieria" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="ingenieria">Ingeniería</TabsTrigger>
          <TabsTrigger value="ciencias">Ciencias</TabsTrigger>
          <TabsTrigger value="sociales">Ciencias Sociales</TabsTrigger>
          <TabsTrigger value="artes">Artes y Humanidades</TabsTrigger>
        </TabsList>

        <TabsContent value="ingenieria" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Ingeniería en Sistemas Computacionales</CardTitle>
                <CardDescription>Desarrollo de software, redes y sistemas informáticos</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Forma profesionales capaces de diseñar, implementar y mantener sistemas de información, redes de
                  computadoras y soluciones tecnológicas para diversos sectores.
                </p>
                <div className="mt-4">
                  <h4 className="font-semibold text-[#1B396A]">Áreas de trabajo:</h4>
                  <ul className="list-disc list-inside mt-2 text-gray-700">
                    <li>Desarrollo de software</li>
                    <li>Administración de redes</li>
                    <li>Seguridad informática</li>
                    <li>Inteligencia artificial</li>
                    <li>Consultoría tecnológica</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ingeniería Industrial</CardTitle>
                <CardDescription>Optimización de procesos y sistemas productivos</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Prepara profesionales para diseñar, implementar y mejorar sistemas integrados de personas, materiales,
                  información y equipos para optimizar procesos productivos.
                </p>
                <div className="mt-4">
                  <h4 className="font-semibold text-[#1B396A]">Áreas de trabajo:</h4>
                  <ul className="list-disc list-inside mt-2 text-gray-700">
                    <li>Gestión de la producción</li>
                    <li>Logística y cadena de suministro</li>
                    <li>Control de calidad</li>
                    <li>Seguridad industrial</li>
                    <li>Mejora continua</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ingeniería Civil</CardTitle>
                <CardDescription>Diseño y construcción de infraestructura</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Forma profesionales para el diseño, construcción y mantenimiento de obras de infraestructura como
                  edificios, carreteras, puentes y sistemas hidráulicos.
                </p>
                <div className="mt-4">
                  <h4 className="font-semibold text-[#1B396A]">Áreas de trabajo:</h4>
                  <ul className="list-disc list-inside mt-2 text-gray-700">
                    <li>Construcción</li>
                    <li>Diseño estructural</li>
                    <li>Geotecnia</li>
                    <li>Hidráulica</li>
                    <li>Supervisión de obras</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ingeniería Mecatrónica</CardTitle>
                <CardDescription>Integración de sistemas mecánicos y electrónicos</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Desarrolla profesionales capaces de diseñar y mantener sistemas que integran componentes mecánicos,
                  electrónicos, de control y software.
                </p>
                <div className="mt-4">
                  <h4 className="font-semibold text-[#1B396A]">Áreas de trabajo:</h4>
                  <ul className="list-disc list-inside mt-2 text-gray-700">
                    <li>Automatización industrial</li>
                    <li>Robótica</li>
                    <li>Diseño de productos</li>
                    <li>Mantenimiento industrial</li>
                    <li>Desarrollo de prototipos</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="ciencias" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Licenciatura en Biología</CardTitle>
                <CardDescription>Estudio de los seres vivos y sus interacciones</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Forma profesionales con conocimientos sobre la estructura, función, desarrollo y evolución de los
                  seres vivos y sus interacciones con el medio ambiente.
                </p>
                <div className="mt-4">
                  <h4 className="font-semibold text-[#1B396A]">Áreas de trabajo:</h4>
                  <ul className="list-disc list-inside mt-2 text-gray-700">
                    <li>Investigación científica</li>
                    <li>Conservación ambiental</li>
                    <li>Biotecnología</li>
                    <li>Educación</li>
                    <li>Gestión de recursos naturales</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Licenciatura en Química</CardTitle>
                <CardDescription>Estudio de la materia y sus transformaciones</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Prepara profesionales para el estudio de la composición, estructura y propiedades de la materia, así
                  como los cambios que experimenta durante las reacciones químicas.
                </p>
                <div className="mt-4">
                  <h4 className="font-semibold text-[#1B396A]">Áreas de trabajo:</h4>
                  <ul className="list-disc list-inside mt-2 text-gray-700">
                    <li>Industria farmacéutica</li>
                    <li>Control de calidad</li>
                    <li>Investigación y desarrollo</li>
                    <li>Análisis químico</li>
                    <li>Docencia e investigación</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="sociales" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Licenciatura en Derecho</CardTitle>
                <CardDescription>Estudio del sistema jurídico y normativo</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Forma profesionales con conocimientos sobre el sistema jurídico, capaces de interpretar y aplicar las
                  leyes para la resolución de conflictos y la defensa de derechos.
                </p>
                <div className="mt-4">
                  <h4 className="font-semibold text-[#1B396A]">Áreas de trabajo:</h4>
                  <ul className="list-disc list-inside mt-2 text-gray-700">
                    <li>Litigio</li>
                    <li>Asesoría jurídica</li>
                    <li>Sector público</li>
                    <li>Docencia e investigación</li>
                    <li>Consultoría</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Licenciatura en Administración</CardTitle>
                <CardDescription>Gestión eficiente de organizaciones</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Prepara profesionales capaces de planificar, organizar, dirigir y controlar los recursos de una
                  organización para alcanzar sus objetivos de manera eficiente.
                </p>
                <div className="mt-4">
                  <h4 className="font-semibold text-[#1B396A]">Áreas de trabajo:</h4>
                  <ul className="list-disc list-inside mt-2 text-gray-700">
                    <li>Gestión empresarial</li>
                    <li>Recursos humanos</li>
                    <li>Marketing</li>
                    <li>Finanzas</li>
                    <li>Emprendimiento</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="artes" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Licenciatura en Arquitectura</CardTitle>
                <CardDescription>Diseño de espacios y edificaciones</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Forma profesionales capaces de diseñar espacios habitables, funcionales y estéticos, considerando
                  aspectos técnicos, ambientales y sociales.
                </p>
                <div className="mt-4">
                  <h4 className="font-semibold text-[#1B396A]">Áreas de trabajo:</h4>
                  <ul className="list-disc list-inside mt-2 text-gray-700">
                    <li>Diseño arquitectónico</li>
                    <li>Urbanismo</li>
                    <li>Restauración</li>
                    <li>Supervisión de obras</li>
                    <li>Consultoría</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Licenciatura en Diseño Gráfico</CardTitle>
                <CardDescription>Comunicación visual y diseño creativo</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Prepara profesionales para la creación de soluciones visuales a problemas de comunicación, utilizando
                  técnicas y herramientas de diseño.
                </p>
                <div className="mt-4">
                  <h4 className="font-semibold text-[#1B396A]">Áreas de trabajo:</h4>
                  <ul className="list-disc list-inside mt-2 text-gray-700">
                    <li>Diseño editorial</li>
                    <li>Identidad corporativa</li>
                    <li>Publicidad</li>
                    <li>Diseño web</li>
                    <li>Ilustración</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
