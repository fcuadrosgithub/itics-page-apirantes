"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Info, AlertCircle, CalendarIcon } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import FormularioPreRegistro from "@/components/formulario"

export default function FichasSection() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-[#1B396A] mb-6">Fichas de Admisión</h2>
      <p className="text-gray-700 mb-8">
        Obtén toda la información necesaria para tramitar tu ficha de admisión y formar parte de nuestra comunidad
        universitaria.
      </p>

      <Tabs defaultValue="info" className="w-full">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
          <TabsTrigger value="info">Información General</TabsTrigger>
          <TabsTrigger value="procedimiento">Procedimiento</TabsTrigger>
          <TabsTrigger value="requisitos">Requisitos</TabsTrigger>
          <TabsTrigger value="formulario">Formulario</TabsTrigger>
        </TabsList>

<TabsContent value="info" className="mt-6">
  <Card>
    <CardHeader>
      <CardTitle>Información General sobre Fichas de Admisión</CardTitle>
      <CardDescription>Periodo de admisión: Mayo - Julio 2025</CardDescription>
    </CardHeader>
    <CardContent className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="bg-[#1B396A] p-2 rounded-full mr-4 mt-1">
              <FileText className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#1B396A]">Precio de la Ficha</h3>
              <p className="text-gray-700">
                El costo de la ficha de admisión es de <strong>$850.00 MXN</strong> (Ochocientos cincuenta pesos
                00/100 M.N.)
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-[#1B396A] p-2 rounded-full mr-4 mt-1">
              <CalendarIcon className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#1B396A]">Fechas Importantes</h3>
              <ul className="space-y-2 text-gray-700 mt-2">
                <li>
                  <strong>Inicio de registro:</strong> 1 de mayo de 2025
                </li>
                <li>
                  <strong>Cierre de registro:</strong> 30 de junio de 2025
                </li>
                <li>
                  <strong>Examen de admisión:</strong> 15 de julio de 2025
                </li>
                <li>
                  <strong>Publicación de resultados:</strong> 31 de julio de 2025
                </li>
                <li>
                  <strong>Inscripciones:</strong> 1 al 15 de agosto de 2025
                </li>
                <li>
                  <strong>Inicio de clases:</strong> 25 de agosto de 2025
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-start">
            <div className="bg-[#1B396A] p-2 rounded-full mr-4 mt-1">
              <Info className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#1B396A]">Información Adicional</h3>
              <ul className="space-y-2 text-gray-700 mt-2">
                <li>El examen de admisión tiene una duración aproximada de 3 horas.</li>
                <li>Se evalúan conocimientos generales, habilidades matemáticas y comprensión lectora.</li>
                <li>Es necesario presentarse 30 minutos antes del horario asignado.</li>
                <li>Debes llevar identificación oficial, comprobante de pago y ficha de admisión impresa.</li>
              </ul>
            </div>
          </div>

          <Alert className="mt-4 border-[#1B396A]">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Importante</AlertTitle>
            <AlertDescription>
              El pago de la ficha no garantiza la admisión a la universidad. La selección se realiza con base en
              los resultados del examen y los lugares disponibles por carrera.
            </AlertDescription>
          </Alert>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <Button className="bg-[#1B396A] hover:bg-[#162c54]">Descargar Guía del Examen</Button>
      </div>
    </CardContent>
  </Card>
</TabsContent>


        <TabsContent value="procedimiento" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Procedimiento para Obtener tu Ficha</CardTitle>
              <CardDescription>Sigue estos pasos para tramitar tu ficha de admisión</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#1B396A] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1B396A]">Pre-registro en línea</h3>
                    <p className="text-gray-700 mt-1">
                      Completa el formulario de pre-registro en la sección "Formulario" de esta página. Deberás
                      proporcionar tus datos personales y seleccionar la carrera de tu interés.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#1B396A] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1B396A]">Realiza el pago</h3>
                    <p className="text-gray-700 mt-1">
                      Una vez completado el pre-registro, recibirás un correo electrónico con la referencia bancaria
                      para realizar el pago de $850.00 MXN. El pago puede realizarse en cualquier sucursal de los
                      siguientes bancos:
                    </p>
                    <ul className="list-disc list-inside mt-2 text-gray-700">
                      <li>BBVA</li>
                      <li>Santander</li>
                      <li>Banorte</li>
                    </ul>
                    <p className="text-gray-700 mt-2">
                      También puedes realizar el pago en línea a través del portal de pagos de la universidad.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#1B396A] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1B396A]">Confirma tu registro</h3>
                    <p className="text-gray-700 mt-1">
                      Después de realizar el pago, deberás subir el comprobante en el sistema de registro y completar la
                      información adicional requerida. El sistema validará tu pago y confirmará tu registro.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#1B396A] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1B396A]">Descarga tu ficha</h3>
                    <p className="text-gray-700 mt-1">
                      Una vez confirmado tu registro, podrás descargar e imprimir tu ficha de admisión, la cual
                      incluirá:
                    </p>
                    <ul className="list-disc list-inside mt-2 text-gray-700">
                      <li>Datos personales</li>
                      <li>Número de folio</li>
                      <li>Carrera seleccionada</li>
                      <li>Fecha, hora y lugar del examen</li>
                      <li>Requisitos para presentar el examen</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#1B396A] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4">
                    5
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1B396A]">Presenta el examen</h3>
                    <p className="text-gray-700 mt-1">
                      Acude puntualmente a la fecha, hora y lugar indicados en tu ficha para presentar el examen de
                      admisión. No olvides llevar:
                    </p>
                    <ul className="list-disc list-inside mt-2 text-gray-700">
                      <li>Ficha de admisión impresa</li>
                      <li>Identificación oficial con fotografía</li>
                      <li>Lápiz del número 2, borrador y sacapuntas</li>
                      <li>Calculadora básica (no científica, no programable)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="requisitos" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Requisitos para Aspirantes</CardTitle>
              <CardDescription>Documentación necesaria para el trámite de ficha e inscripción</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#1B396A] mb-3">Para el trámite de ficha</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <div className="bg-[#006341] p-1 rounded-full mr-3 mt-1">
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>CURP actualizada (formato reciente)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-[#006341] p-1 rounded-full mr-3 mt-1">
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Correo electrónico personal (no institucional)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-[#006341] p-1 rounded-full mr-3 mt-1">
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Fotografía digital reciente (formato JPG, fondo blanco, ropa formal)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-[#006341] p-1 rounded-full mr-3 mt-1">
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Comprobante de domicilio reciente (no mayor a 3 meses)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-[#006341] p-1 rounded-full mr-3 mt-1">
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>
                        Certificado de bachillerato o constancia de estudios con promedio (para estudiantes que aún no
                        concluyen)
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#1B396A] mb-3">
                    Para la inscripción (en caso de ser aceptado)
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <div className="bg-[#006341] p-1 rounded-full mr-3 mt-1">
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Certificado de bachillerato original y dos copias</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-[#006341] p-1 rounded-full mr-3 mt-1">
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Acta de nacimiento original y dos copias</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-[#006341] p-1 rounded-full mr-3 mt-1">
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>CURP actualizada (dos copias)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-[#006341] p-1 rounded-full mr-3 mt-1">
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>6 fotografías tamaño infantil (blanco y negro, papel mate, fondo blanco, ropa formal)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-[#006341] p-1 rounded-full mr-3 mt-1">
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Comprobante de domicilio reciente (original y copia)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-[#006341] p-1 rounded-full mr-3 mt-1">
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Identificación oficial con fotografía (original y copia)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-[#006341] p-1 rounded-full mr-3 mt-1">
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Comprobante de pago de inscripción</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-[#006341] p-1 rounded-full mr-3 mt-1">
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Certificado médico reciente (expedido por institución pública)</span>
                    </li>
                  </ul>
                </div>

                <Alert className="mt-4 border-amber-500">
                  <AlertCircle className="h-4 w-4 text-amber-500" />
                  <AlertTitle className="text-amber-500">Nota importante</AlertTitle>
                  <AlertDescription>
                    Todos los documentos originales serán devueltos después de su cotejo. Los aspirantes extranjeros
                    deberán presentar documentación adicional y validada por las autoridades mexicanas.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="formulario" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Formulario de Pre-registro</CardTitle>
              <CardDescription>Completa el siguiente formulario para iniciar tu proceso de admisión</CardDescription>
            </CardHeader>
            <CardContent>
              <FormularioPreRegistro />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}