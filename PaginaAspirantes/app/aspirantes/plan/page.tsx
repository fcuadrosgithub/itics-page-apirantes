import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function PlanPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Plan de Estudios</h2>
      <p className="mb-8 text-muted-foreground">
        Conoce nuestros planes de estudio diseñados para formar profesionales competitivos con educación de calidad para
        el desarrollo sustentable de la región.
      </p>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full md:w-auto grid-cols-1 md:grid-cols-3">
          <TabsTrigger value="general">Información General</TabsTrigger>
          <TabsTrigger value="estructura">Estructura Curricular</TabsTrigger>
          <TabsTrigger value="calendario">Calendario Académico</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Información General del Plan de Estudios</CardTitle>
              <CardDescription>
                Nuestros programas académicos están diseñados para formar profesionales con competencias técnicas y
                humanas.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Todos nuestros programas educativos están basados en el modelo por competencias, con un enfoque práctico
                y orientado a la solución de problemas reales de la industria.
              </p>

              <h3 className="text-lg font-semibold mt-4">Características de nuestros planes:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Duración de 9 semestres (4.5 años)</li>
                <li>Programas acreditados por organismos reconocidos</li>
                <li>Prácticas profesionales obligatorias</li>
                <li>Servicio social como parte de la formación integral</li>
                <li>Residencias profesionales en empresas del sector</li>
                <li>Opciones de titulación flexibles</li>
                <li>Programas de movilidad estudiantil</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="estructura" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Estructura Curricular</CardTitle>
              <CardDescription>
                Nuestros planes de estudio están estructurados en áreas formativas que garantizan una educación
                integral.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="ciencias-basicas">
                  <AccordionTrigger>Ciencias Básicas</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Asignaturas que proporcionan los fundamentos científicos de la ingeniería:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Cálculo Diferencial e Integral</li>
                      <li>Álgebra Lineal</li>
                      <li>Ecuaciones Diferenciales</li>
                      <li>Física</li>
                      <li>Química</li>
                      <li>Probabilidad y Estadística</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="ciencias-ingenieria">
                  <AccordionTrigger>Ciencias de la Ingeniería</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Asignaturas que proporcionan los fundamentos de la disciplina específica:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Termodinámica</li>
                      <li>Mecánica de Materiales</li>
                      <li>Circuitos Eléctricos</li>
                      <li>Programación</li>
                      <li>Diseño Asistido por Computadora</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="ingenieria-aplicada">
                  <AccordionTrigger>Ingeniería Aplicada</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Asignaturas específicas de cada carrera que aplican los conocimientos a problemas reales:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Diseño de Sistemas</li>
                      <li>Automatización</li>
                      <li>Gestión de Proyectos</li>
                      <li>Especialidades según la carrera</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="sociohumanisticas">
                  <AccordionTrigger>Ciencias Sociales y Humanidades</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Asignaturas que complementan la formación integral:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Desarrollo Sustentable</li>
                      <li>Ética Profesional</li>
                      <li>Taller de Comunicación</li>
                      <li>Desarrollo Humano</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="economico-administrativas">
                  <AccordionTrigger>Ciencias Económico-Administrativas</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Asignaturas que proporcionan herramientas de gestión:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Administración</li>
                      <li>Contabilidad y Costos</li>
                      <li>Ingeniería Económica</li>
                      <li>Formulación y Evaluación de Proyectos</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="calendario" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Calendario Académico</CardTitle>
              <CardDescription>Fechas importantes del ciclo escolar actual.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Actividad</TableHead>
                    <TableHead>Fecha de Inicio</TableHead>
                    <TableHead>Fecha de Término</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Inicio de Semestre</TableCell>
                    <TableCell>30 de enero 2024</TableCell>
                    <TableCell>21 de junio 2024</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Primer Parcial</TableCell>
                    <TableCell>4 de marzo 2024</TableCell>
                    <TableCell>8 de marzo 2024</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Segundo Parcial</TableCell>
                    <TableCell>22 de abril 2024</TableCell>
                    <TableCell>26 de abril 2024</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Tercer Parcial</TableCell>
                    <TableCell>3 de junio 2024</TableCell>
                    <TableCell>7 de junio 2024</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Vacaciones de Semana Santa</TableCell>
                    <TableCell>25 de marzo 2024</TableCell>
                    <TableCell>5 de abril 2024</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Inscripciones Próximo Semestre</TableCell>
                    <TableCell>24 de junio 2024</TableCell>
                    <TableCell>12 de julio 2024</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
