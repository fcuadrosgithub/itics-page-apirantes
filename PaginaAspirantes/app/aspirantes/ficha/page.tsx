import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, CheckCircle, FileText, Calendar, CreditCard } from "lucide-react"
import Link from "next/link"

export default function FichaPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Ficha de Admisión</h2>
      <p className="mb-8 text-muted-foreground">
        Información sobre el proceso de admisión, requisitos, costos y fechas importantes.
      </p>

      <Alert className="mb-8">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Convocatoria abierta</AlertTitle>
        <AlertDescription>
          El proceso de admisión para el semestre Agosto-Diciembre 2025 ya está abierto. Fecha límite para solicitar
          ficha: 6 de junio de 2025.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="precio" className="w-full">
        <TabsList className="grid w-full md:w-auto grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="precio">Pago</TabsTrigger>
          <TabsTrigger value="procedimiento">Procedimiento</TabsTrigger>
          <TabsTrigger value="requisitos">Requisitos</TabsTrigger>
          <TabsTrigger value="examen">Examen</TabsTrigger>
        </TabsList>

        <TabsContent value="precio" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" /> Costos del Proceso de Admisión
              </CardTitle>
              <CardDescription>Información sobre los costos asociados al proceso de admisión.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border p-4">
                <h3 className="text-lg font-semibold mb-2">Ficha de Admisión</h3>
                <p className="text-3xl font-bold text-primary mb-2">$628.00 MXN</p>
                <p className="text-sm text-muted-foreground">El pago de la ficha incluye:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Derecho a examen de admisión</li>
                </ul>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="text-lg font-semibold mb-2">Formas de Pago</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Depósito bancario</p>
                      <p className="text-sm text-muted-foreground">
                        Banco: BBVA Bancomer
                        <br />
                        Cuenta: 001667645
                        <br />A nombre de: Instituto Tecnológico Superior del Occidente del Estado de Hidalgo
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Transferencia electrónica</p>
                      <p className="text-sm text-muted-foreground">
                        CLABE: Tu Referencia
                        <br />
                        Referencia: Tu CURP
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Pago en caja del instituto</p>
                      <p className="text-sm text-muted-foreground">
                        Horario: Lunes a viernes de 8:30 a 16:30 hrs
                        <br />
                        Ubicación: Departamento de Control Escolar, Edificio Central.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="text-lg font-semibold mb-2">Costos Adicionales (Después de ser aceptado)</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div>
                      <p className="font-medium">Inscripción semestral</p>
                      <p className="text-sm text-muted-foreground">$1,800.00 MXN</p>
                    </div>
                  </li>
                </ul>
              </div>

              <Button asChild className="w-full">
                <Link href="/aspirantes/contacto">¿Tienes dudas? Contáctanos</Link>
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="procedimiento" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" /> Procedimiento de Admisión
              </CardTitle>
              <CardDescription>Pasos a seguir para obtener tu ficha de admisión.</CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="space-y-6 mt-2">
                <li className="border-l-2 border-primary pl-6 pb-6 relative">
                  <div className="absolute -left-3 top-0 bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center">
                    1
                  </div>
                  <h3 className="text-lg font-semibold mb-1">Pre-registro en línea</h3>
                  <p className="text-muted-foreground mb-2">
                    Completa el formulario de pre-registro en la página principal ITSOEH que se encuentra en la convocatoria..
                  </p>
                </li>

                <li className="border-l-2 border-primary pl-6 pb-6 relative">
                  <div className="absolute -left-3 top-0 bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center">
                    2
                  </div>
                  <h3 className="text-lg font-semibold mb-1">Realiza el pago</h3>
                  <p className="text-muted-foreground mb-2">
                    Efectúa el pago de la ficha de admisión por cualquiera de los medios disponibles.
                  </p>
                  <p className="text-sm bg-muted p-2 rounded">
                    <strong>Importante:</strong> Conserva tu comprobante de pago original, lo necesitarás para el
                    siguiente paso.
                  </p>
                </li>

                <li className="border-l-2 border-primary pl-6 pb-6 relative">
                  <div className="absolute -left-3 top-0 bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center">
                    3
                  </div>
                  <h3 className="text-lg font-semibold mb-1">Entrega de documentación</h3>
                  <p className="text-muted-foreground mb-2">
                    Acude al Departamento de Control Escolar con tu documentación completa y comprobante de pago.
                  </p>
                  <p className="text-sm">
                    <strong>Horario de atención:</strong> Lunes a viernes de 8:30 a 16:30 hrs.
                  </p>
                </li>

                <li className="border-l-2 border-primary pl-6 pb-6 relative">
                  <div className="absolute -left-3 top-0 bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center">
                    4
                  </div>
                  <h3 className="text-lg font-semibold mb-1">Recibe tu ficha</h3>
                  <p className="text-muted-foreground mb-2">
                    Se te entregará tu ficha con la fecha, hora y lugar del examen de admisión.
                  </p>
                </li>

                <li className="border-l-2 border-primary pl-6 pb-6 relative">
                  <div className="absolute -left-3 top-0 bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center">
                    5
                  </div>
                  <h3 className="text-lg font-semibold mb-1">Presenta el examen en Línea</h3>
                  <p className="text-muted-foreground mb-2">
                    Conéctate puntualmente a la aplicación del examen de admisión en la fecha indicada.
                  </p>
                  <p className="text-sm bg-muted p-2 rounded">
                    <strong>Recomendación:</strong> Prepárate 15 minutos antes de la hora programada y ten a mano lápiz, borrador y calculadora básica.
                  </p>
                </li>

                <li className="pl-6 relative">
                  <div className="absolute -left-3 top-0 bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center">
                    6
                  </div>
                  <h3 className="text-lg font-semibold mb-1">Consulta resultados</h3>
                  <p className="text-muted-foreground mb-2">
                    Se anunciará a través de la página oficial del ITSOEH y sus redes sociales institucionales.
                  </p>
                  <p className="text-sm">
                    <strong>Fecha de publicación:</strong> 25 de junio de 2025.
                  </p>
                </li>
              </ol>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="requisitos" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" /> Requisitos
              </CardTitle>
              <CardDescription>Documentación necesaria para el proceso de admisión.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Documentos para solicitar ficha</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>CURP actualizada (formato reciente)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Acta de Nacimiento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Certificado de bachillerato o constancia de estudios con promedio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Identificación oficial con fotografía (INE, pasaporte o credencial de bachillerato)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>1 fotografía tamaño infantil a color (recientes)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Requisitos para inscripción (después de ser aceptado)</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Certificado o constancia de estudios de bachillerato donde especifique promedio mínimo de 7.0 (escaneado en formato PDF)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Acta de nacimiento (escaneada en formato PDF)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>CURP (emitido por la RENAPO, escaneado en formato PDF)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Contar con correo electrónico con dominio gmail</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Fotografía tamaño infantil en formato digital .jpg</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Estudiantes extranjeros deberán tramitar su certificado de estudios revalidados en la Subsecretaría de Educación Media Superior y Superior, ubicada en Circuito Ex Hacienda de la Concepción, Lote 17, San Juan Tilcuautla, Municipio de San Agustín Tlaxiaca, Hidalgo.</span>
                  </li>
                </ul>
              </div>

              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Importante</AlertTitle>
                <AlertDescription>
                  Todos los documentos originales serán devueltos después de su cotejo. Las copias deben ser en tamaño
                  carta y legibles.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="examen" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" /> Examen de Admisión
              </CardTitle>
              <CardDescription>Información sobre el examen de admisión, fechas y recomendaciones.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Fechas importantes</h3>
                <div className="rounded-lg border p-4">
                  <p className="font-medium">Solicitud de fichas:</p>
                  <p className="text-muted-foreground mb-2">Del 10 de febrero al 06 de junio de 2025</p>

                  <p className="font-medium mt-4">Evaluación diagnóstica en línea:</p>
                  <p className="text-muted-foreground mb-2">20 de junio de 2025</p>

                  <p className="font-medium mt-4">Publicación de resultados:</p>
                  <p className="text-muted-foreground mb-2">25 de junio de 2025</p>

                  <p className="text-sm bg-muted p-2 rounded mt-4">
                    <strong>Nota:</strong> La fecha de tu examen será asignada al momento de recibir tu ficha.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Características del examen</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Tipo de examen</p>
                      <p className="text-sm text-muted-foreground">
                        EVALUATEC (Evaluación Diagnóstica)
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Duración</p>
                      <p className="text-sm text-muted-foreground">3 horas aproximadamente</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Áreas que evalúa</p>
                      <p className="text-sm text-muted-foreground">
                        Pensamiento matemático, razonamiento lógico-matemático, estructura del lenguaje y comprensión lectora.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>


              <div>
                <h3 className="text-lg font-semibold mb-3">Recomendaciones para el día del examen</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Se recomienda que el sustentante cuente con un equipo de cómputo funcional (de escritorio o portátil) y una conexión estable a internet,
                      evitando el uso de tabletas o teléfonos celulares.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Disponer de un espacio cerrado, silencioso y bien iluminado para realizar la evaluación diagnóstica en línea.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Es necesario que el sustentante tenga a la mano el número de folio proporcionado durante el proceso de registro de la ficha, así como su CURP.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>El sustentante debe asegurarse de tener una conexión a internet estable y estar preparado 15 minutos antes de la aplicación.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>La prueba se abrirá puntualmente a las 9:00 horas, por lo que no es necesario ingresar antes de esa hora.</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
