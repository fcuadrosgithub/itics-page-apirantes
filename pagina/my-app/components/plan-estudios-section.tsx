import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function PlanEstudiosSection() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-[#1B396A] mb-6">Plan de Estudios</h2>
      <p className="text-gray-700 mb-8">
        Nuestros planes de estudio están diseñados para brindarte una formación integral y de calidad, con un enfoque
        práctico y orientado a las necesidades del mercado laboral actual.
      </p>

      <Tabs defaultValue="sistemas" className="w-full">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
          <TabsTrigger value="sistemas">Ing. en Sistemas Computacionales</TabsTrigger>
          <TabsTrigger value="industrial">Ing. Industrial</TabsTrigger>
          <TabsTrigger value="administracion">Lic. en Administración</TabsTrigger>
        </TabsList>

        <TabsContent value="sistemas" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Ingeniería en Sistemas Computacionales</CardTitle>
              <p className="text-gray-600">Duración: 9 semestres | Créditos totales: 260</p>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="semestre1">
                <TabsList className="grid w-full grid-cols-3 md:grid-cols-5">
                  <TabsTrigger value="semestre1">1er Semestre</TabsTrigger>
                  <TabsTrigger value="semestre2">2do Semestre</TabsTrigger>
                  <TabsTrigger value="semestre3">3er Semestre</TabsTrigger>
                  <TabsTrigger value="semestre4">4to Semestre</TabsTrigger>
                  <TabsTrigger value="semestre5">5to Semestre</TabsTrigger>
                </TabsList>

                <TabsContent value="semestre1" className="mt-4">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Materia</TableHead>
                        <TableHead className="w-[100px]">Créditos</TableHead>
                        <TableHead className="w-[150px]">Horas/Semana</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Cálculo Diferencial</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>5</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Fundamentos de Programación</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>5</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Matemáticas Discretas</TableCell>
                        <TableCell>4</TableCell>
                        <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Taller de Ética</TableCell>
                        <TableCell>4</TableCell>
                        <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Fundamentos de Investigación</TableCell>
                        <TableCell>4</TableCell>
                        <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Taller de Administración</TableCell>
                        <TableCell>4</TableCell>
                        <TableCell>4</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TabsContent>

                <TabsContent value="semestre2" className="mt-4">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Materia</TableHead>
                        <TableHead className="w-[100px]">Créditos</TableHead>
                        <TableHead className="w-[150px]">Horas/Semana</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Cálculo Integral</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>5</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Programación Orientada a Objetos</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>5</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Contabilidad Financiera</TableCell>
                        <TableCell>4</TableCell>
                        <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Química</TableCell>
                        <TableCell>4</TableCell>
                        <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Álgebra Lineal</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>5</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Probabilidad y Estadística</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>5</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TabsContent>

                <TabsContent value="semestre3" className="mt-4">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Materia</TableHead>
                        <TableHead className="w-[100px]">Créditos</TableHead>
                        <TableHead className="w-[150px]">Horas/Semana</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Cálculo Vectorial</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>5</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Estructura de Datos</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>5</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Cultura Empresarial</TableCell>
                        <TableCell>4</TableCell>
                        <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Investigación de Operaciones</TableCell>
                        <TableCell>4</TableCell>
                        <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Sistemas Operativos</TableCell>
                        <TableCell>4</TableCell>
                        <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Física General</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>5</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TabsContent>

                <TabsContent value="semestre4" className="mt-4">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Materia</TableHead>
                        <TableHead className="w-[100px]">Créditos</TableHead>
                        <TableHead className="w-[150px]">Horas/Semana</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Ecuaciones Diferenciales</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>5</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Métodos Numéricos</TableCell>
                        <TableCell>4</TableCell>
                        <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Tópicos Avanzados de Programación</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>5</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Fundamentos de Bases de Datos</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>5</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Simulación</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>5</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Principios Eléctricos y Aplicaciones Digitales</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>5</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TabsContent>

                <TabsContent value="semestre5" className="mt-4">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Materia</TableHead>
                        <TableHead className="w-[100px]">Créditos</TableHead>
                        <TableHead className="w-[150px]">Horas/Semana</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Graficación</TableCell>
                        <TableCell>4</TableCell>
                        <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Fundamentos de Telecomunicaciones</TableCell>
                        <TableCell>4</TableCell>
                        <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Sistemas Programables</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>5</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Taller de Bases de Datos</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>5</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Arquitectura de Computadoras</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>5</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Ingeniería de Software</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>5</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TabsContent>
              </Tabs>

              <div className="mt-6">
                <h3 className="text-lg font-semibold text-[#1B396A] mb-2">Perfil de Egreso</h3>
                <p className="text-gray-700">El egresado de Ingeniería en Sistemas Computacionales será capaz de:</p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  <li>Desarrollar, implementar y administrar software de aplicación.</li>
                  <li>Diseñar e implementar interfaces hombre-máquina y máquina-máquina.</li>
                  <li>Administrar proyectos de desarrollo de software.</li>
                  <li>Integrar soluciones computacionales con diferentes tecnologías, plataformas o dispositivos.</li>
                  <li>Diseñar, implementar y administrar bases de datos.</li>
                  <li>Desarrollar aplicaciones para dispositivos móviles.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="industrial" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Ingeniería Industrial</CardTitle>
              <p className="text-gray-600">Duración: 9 semestres | Créditos totales: 260</p>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="semestre1">
                <TabsList className="grid w-full grid-cols-3 md:grid-cols-5">
                  <TabsTrigger value="semestre1">1er Semestre</TabsTrigger>
                  <TabsTrigger value="semestre2">2do Semestre</TabsTrigger>
                  <TabsTrigger value="semestre3">3er Semestre</TabsTrigger>
                </TabsList>

                <TabsContent value="semestre1" className="mt-4">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Materia</TableHead>
                        <TableHead className="w-[100px]">Créditos</TableHead>
                        <TableHead className="w-[150px]">Horas/Semana</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Cálculo Diferencial</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>5</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Química</TableCell>
                        <TableCell>4</TableCell>
                        <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Taller de Ética</TableCell>
                        <TableCell>4</TableCell>
                        <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Fundamentos de Investigación</TableCell>
                        <TableCell>4</TableCell>
                        <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Dibujo Industrial</TableCell>
                        <TableCell>4</TableCell>
                        <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Metrología y Normalización</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>5</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TabsContent>

                <TabsContent value="semestre2" className="mt-4">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Materia</TableHead>
                        <TableHead className="w-[100px]">Créditos</TableHead>
                        <TableHead className="w-[150px]">Horas/Semana</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Cálculo Integral</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>5</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Álgebra Lineal</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>5</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Probabilidad y Estadística</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>5</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Física</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>5</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Análisis de la Realidad Nacional</TableCell>
                        <TableCell>3</TableCell>
                        <TableCell>3</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Procesos de Fabricación</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>5</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TabsContent>

                <TabsContent value="semestre3" className="mt-4">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Materia</TableHead>
                        <TableHead className="w-[100px]">Créditos</TableHead>
                        <TableHead className="w-[150px]">Horas/Semana</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Cálculo Vectorial</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>5</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Economía</TableCell>
                        <TableCell>4</TableCell>
                        <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Estadística Inferencial I</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>5</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Estudio del Trabajo I</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>5</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Investigación de Operaciones I</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>5</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Electricidad y Electrónica Industrial</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>5</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TabsContent>
              </Tabs>

              <div className="mt-6">
                <h3 className="text-lg font-semibold text-[#1B396A] mb-2">Perfil de Egreso</h3>
                <p className="text-gray-700">El egresado de Ingeniería Industrial será capaz de:</p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  <li>
                    Diseñar, implementar y mejorar sistemas integrados por personas, materiales, información y equipos.
                  </li>
                  <li>Aplicar conocimientos de matemáticas, ciencias e ingeniería para la solución de problemas.</li>
                  <li>Diseñar y conducir experimentos, así como analizar e interpretar datos.</li>
                  <li>Identificar, formular y resolver problemas de ingeniería industrial.</li>
                  <li>
                    Utilizar técnicas, habilidades y herramientas modernas de ingeniería necesarias para la práctica
                    profesional.
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="administracion" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Licenciatura en Administración</CardTitle>
              <p className="text-gray-600">Duración: 8 semestres | Créditos totales: 240</p>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="semestre1">
                <TabsList className="grid w-full grid-cols-3 md:grid-cols-5">
                  <TabsTrigger value="semestre1">1er Semestre</TabsTrigger>
                  <TabsTrigger value="semestre2">2do Semestre</TabsTrigger>
                  <TabsTrigger value="semestre3">3er Semestre</TabsTrigger>
                </TabsList>

                <TabsContent value="semestre1" className="mt-4">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Materia</TableHead>
                        <TableHead className="w-[100px]">Créditos</TableHead>
                        <TableHead className="w-[150px]">Horas/Semana</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Fundamentos de Administración</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>5</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Contabilidad Básica</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>5</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Matemáticas Aplicadas a la Administración</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>5</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Fundamentos de Economía</TableCell>
                        <TableCell>4</TableCell>
                        <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Tecnologías de la Información</TableCell>
                        <TableCell>4</TableCell>
                        <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Fundamentos de Derecho</TableCell>
                        <TableCell>4</TableCell>
                        <TableCell>4</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TabsContent>

                <TabsContent value="semestre2" className="mt-4">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Materia</TableHead>
                        <TableHead className="w-[100px]">Créditos</TableHead>
                        <TableHead className="w-[150px]">Horas/Semana</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Proceso Administrativo</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>5</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Contabilidad Intermedia</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>5</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Estadística para Administración I</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>5</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Microeconomía</TableCell>
                        <TableCell>4</TableCell>
                        <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Derecho Mercantil</TableCell>
                        <TableCell>4</TableCell>
                        <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Metodología de la Investigación</TableCell>
                        <TableCell>4</TableCell>
                        <TableCell>4</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TabsContent>

                <TabsContent value="semestre3" className="mt-4">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Materia</TableHead>
                        <TableHead className="w-[100px]">Créditos</TableHead>
                        <TableHead className="w-[150px]">Horas/Semana</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Organización y Procedimientos</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>5</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Contabilidad de Costos</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>5</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Estadística para Administración II</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>5</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Macroeconomía</TableCell>
                        <TableCell>4</TableCell>
                        <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Derecho Laboral</TableCell>
                        <TableCell>4</TableCell>
                        <TableCell>4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Comportamiento Organizacional</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>5</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TabsContent>
              </Tabs>

              <div className="mt-6">
                <h3 className="text-lg font-semibold text-[#1B396A] mb-2">Perfil de Egreso</h3>
                <p className="text-gray-700">El egresado de la Licenciatura en Administración será capaz de:</p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  <li>Planear, organizar, dirigir y controlar organizaciones públicas y privadas.</li>
                  <li>Diseñar y aplicar estrategias de mercadotecnia, producción, finanzas y recursos humanos.</li>
                  <li>Analizar e interpretar información financiera para la toma de decisiones.</li>
                  <li>Desarrollar y evaluar proyectos de inversión.</li>
                  <li>Aplicar tecnologías de información en la gestión empresarial.</li>
                  <li>Emprender nuevos negocios y desarrollar la cultura empresarial.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
