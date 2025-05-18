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
          El proceso de admisión para el semestre Agosto-Diciembre 2024 ya está abierto. Fecha límite para solicitar
          ficha: 15 de julio de 2024.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="precio" className="w-full">
        <TabsList className="grid w-full md:w-auto grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="precio">Precio</TabsTrigger>
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
                <p className="text-3xl font-bold text-primary mb-2">$850.00 MXN</p>
                <p className="text-sm text-muted-foreground">El pago de la ficha incluye:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Derecho a examen de admisión</li>
                  <li>Curso de inducción</li>
                  <li>Material informativo</li>
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
                        Cuenta: 0123456789
                        <br />A nombre de: Instituto Tecnológico Superior del Occidente del Estado de Hidalgo
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Transferencia electrónica</p>
                      <p className="text-sm text-muted-foreground">
                        CLABE: 012290001234567890
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
                        Horario: Lunes a viernes de 9:00 a 16:00 hrs
                        <br />
                        Ubicación: Edificio A, planta baja
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
                  <li className="flex items-start gap-2">
                    <div>
                      <p className="font-medium">Credencial</p>
                      <p className="text-sm text-muted-foreground">$120.00 MXN</p>
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
                    Completa el formulario de pre-registro en el sistema de admisiones.
                  </p>
                  <Button variant="outline" className="mt-2">
                    Ir al sistema de pre-registro
                  </Button>
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
                    Acude al Departamento de Servicios Escolares con tu documentación completa y comprobante de pago.
                  </p>
                  <p className="text-sm">
                    <strong>Horario de atención:</strong> Lunes a viernes de 9:00 a 16:00 hrs.
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
                  <h3 className="text-lg font-semibold mb-1">Presenta el examen</h3>
                  <p className="text-muted-foreground mb-2">
                    Acude puntualmente a la aplicación del examen de admisión en la fecha indicada.
                  </p>
                  <p className="text-sm bg-muted p-2 rounded">
                    <strong>Recomendación:</strong> Llega 30 minutos antes de la hora programada y lleva lápiz #2,
                    borrador y calculadora básica.
                  </p>
                </li>

                <li className="pl-6 relative">
                  <div className="absolute -left-3 top-0 bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center">
                    6
                  </div>
                  <h3 className="text-lg font-semibold mb-1">Consulta resultados</h3>
                  <p className="text-muted-foreground mb-2">
                    Los resultados se publicarán en la página web institucional y en las instalaciones del instituto.
                  </p>
                  <p className="text-sm">
                    <strong>Fecha de publicación:</strong> 25 de julio de 2024.
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
                    <span>Comprobante de pago original</span>
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
                    <span>2 fotografías tamaño infantil a color (recientes)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Requisitos para inscripción (después de ser aceptado)</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Certificado de bachillerato (original y copia)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Acta de nacimiento (original y copia)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>CURP actualizada (formato reciente)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Comprobante de domicilio reciente (no mayor a 3 meses)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>6 fotografías tamaño infantil a color (fondo blanco, ropa formal)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Certificado médico expedido por institución pública (IMSS, ISSSTE, SSA)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Comprobante de pago de inscripción</span>
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
              <CardDescription>Información sobre el examen de admisión, fechas y guía de estudio.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Fechas de aplicación</h3>
                <div className="rounded-lg border p-4">
                  <p className="font-medium">Primera aplicación:</p>
                  <p className="text-muted-foreground mb-2">15 de junio de 2024, 9:00 hrs.</p>

                  <p className="font-medium mt-4">Segunda aplicación:</p>
                  <p className="text-muted-foreground mb-2">13 de julio de 2024, 9:00 hrs.</p>

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
                        EXANI-II de CENEVAL (Examen Nacional de Ingreso a la Educación Superior)
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Duración</p>
                      <p className="text-sm text-muted-foreground">4 horas aproximadamente</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Áreas que evalúa</p>
                      <p className="text-sm text-muted-foreground">
                        Pensamiento matemático, pensamiento analítico, estructura de la lengua y comprensión lectora
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Guía de estudio</h3>
                <p className="text-muted-foreground mb-4">
                  Te recomendamos prepararte adecuadamente para el examen utilizando los siguientes recursos:
                </p>
                <ul className="space-y-4">
                  <li className="border rounded-lg p-4">
                    <p className="font-medium">Guía EXANI-II</p>
                    <p className="text-sm text-muted-foreground mb-2">
                      Descarga la guía oficial del CENEVAL con ejemplos de preguntas y temas a estudiar.
                    </p>
                    <Button variant="outline">Descargar guía</Button>
                  </li>
                  <li className="border rounded-lg p-4">
                    <p className="font-medium">Curso de preparación</p>
                    <p className="text-sm text-muted-foreground mb-2">
                      El instituto ofrece un curso de preparación para el examen de admisión.
                    </p>
                    <div className="text-sm">
                      <p>
                        <strong>Fechas:</strong> Del 20 de mayo al 10 de junio de 2024
                      </p>
                      <p>
                        <strong>Horario:</strong> Sábados de 9:00 a 14:00 hrs.
                      </p>
                      <p>
                        <strong>Costo:</strong> $500.00 MXN
                      </p>
                    </div>
                    <Button variant="outline" className="mt-3">
                      Inscribirme al curso
                    </Button>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Recomendaciones para el día del examen</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Llega 30 minutos antes de la hora programada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Presenta tu ficha de admisión e identificación oficial</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Lleva lápiz del número 2 o 2½, borrador y sacapuntas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Puedes llevar calculadora básica (no programable, no científica)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>No se permite el uso de celulares, tabletas o dispositivos electrónicos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Desayuna bien y descansa lo suficiente el día anterior</span>
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
