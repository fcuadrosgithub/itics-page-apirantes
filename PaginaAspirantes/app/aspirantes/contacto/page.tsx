"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"
import { submitContactForm, type ContactFormData } from "./actions"

const formSchema = z.object({
  nombre: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  apellidos: z.string().min(2, {
    message: "Los apellidos deben tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor ingresa un correo electrónico válido.",
  }),
  telefono: z.string()
    .regex(/^\d+$/, {
      message: "El teléfono debe contener números.",
    })
    .min(10, {
      message: "El teléfono debe tener al menos 10 dígitos.",
    }),
  carreraInteres: z.string({
    required_error: "Por favor selecciona una carrera de interés.",
  }),
  mensaje: z.string().min(10, {
    message: "El mensaje debe tener al menos 10 caracteres.",
  }),
})

export default function ContactoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      apellidos: "",
      email: "",
      telefono: "",
      carreraInteres: "",
      mensaje: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    try {
      const result = await submitContactForm(values as ContactFormData)

      if (result.success) {
        toast({
          title: "Formulario enviado",
          description: result.message,
        })
        form.reset()
      } else {
        toast({
          title: "Error al enviar",
          description: result.message,
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error)
      toast({
        title: "Error al enviar",
        description: "Hubo un problema al enviar tu mensaje. Por favor intenta de nuevo.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Contacto</h2>
      <p className="mb-8 text-muted-foreground">
        ¿Tienes dudas sobre el proceso de admisión o nuestras carreras? Completa el siguiente formulario y un asesor se
        pondrá en contacto contigo a la brevedad.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Formulario de Contacto</CardTitle>
              <CardDescription>Completa todos los campos para recibir información personalizada.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="nombre"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre(s)</FormLabel>
                          <FormControl>
                            <Input placeholder="Ingresa tu nombre" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="apellidos"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Apellidos</FormLabel>
                          <FormControl>
                            <Input placeholder="Ingresa tus apellidos" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Correo Electrónico</FormLabel>
                          <FormControl>
                            <Input placeholder="tu@ejemplo.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="telefono"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Teléfono</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="10 dígitos"
                              {...field}
                              onKeyPress={(e) => {
                                if (!/[0-9]/.test(e.key)) {
                                  e.preventDefault();
                                }
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="carreraInteres"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Carrera de Interés</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona una carrera" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="redes">Redes y Telecomunicaciones</SelectItem>
                            <SelectItem value="software">Desarrollo de Software</SelectItem>
                            <SelectItem value="iot">Internet de las Cosas (IoT)</SelectItem>
                            <SelectItem value="seguridad">Ciberseguridad</SelectItem>
                            <SelectItem value="basesdatos">Bases de Datos</SelectItem>
                            <SelectItem value="sistemas">Sistemas Computacionales</SelectItem>
                            <SelectItem value="cloud">Computación en la Nube</SelectItem>
                            <SelectItem value="embebidos">Sistemas Embebidos</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="mensaje"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensaje</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Escribe tus dudas o comentarios aquí..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>Sé específico para que podamos ayudarte mejor.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Enviar Mensaje
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Información de Contacto</CardTitle>
              <CardDescription>Otras formas de comunicarte con nosotros.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Dirección</p>
                  <p className="text-sm text-muted-foreground">
                    Paseo del Agrarismo 2000, Carr. Mixquiahuala-Tula Km. 2.5,
                    <br />
                    Mixquiahuala de Juárez, Hidalgo, C.P. 42700
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Teléfonos</p>
                  <p className="text-sm text-muted-foreground">
                    73873-54000 ext. 631, 632, 633 y 634.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Correo Electrónico</p>
                  <p className="text-sm text-muted-foreground">
                    fichas@itsoeh.edu.mx
                  </p>
                </div>
              </div>

              <div className="border-t pt-4 mt-4">
                <p className="font-medium mb-2">Horario de Atención</p>
                <p className="text-sm text-muted-foreground">
                  Lunes a Viernes
                  <br />
                  8:30 a 16:30 hrs.
                </p>
              </div>

<div className="border-t pt-4 mt-4">
  <p className="font-medium mb-2">Redes Sociales</p>
  <div className="flex gap-4 mt-2">
    {/* Facebook con link */}
    <a
      href="https://www.facebook.com/share/16KBXNF7Lh/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
    >
      <Button variant="outline" size="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-facebook"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      </Button>
    </a>
    <a
  href="https://www.instagram.com/itics.itsoeh?igsh=MXZuY3p0NXd0N2JyMQ=="
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Instagram"
>
  <Button variant="outline" size="icon">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-instagram"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  </Button>
</a>


    {/* Google con link */}
    <a
      href="https://www.itsoeh.edu.mx/front/#"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Google"
    >
      <Button variant="outline" size="icon">
        {/* Aquí te dejo un ícono simple de Google SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-google"
        >
          <path d="M21.35 11.1h-9.17v2.95h5.28c-.23 1.46-1.63 4.28-5.28 4.28-3.18 0-5.77-2.63-5.77-5.87s2.59-5.87 5.77-5.87c1.81 0 3.03.77 3.74 1.44l2.55-2.45C17.68 6.1 15.82 5 13.5 5 8.87 5 5 8.92 5 13.67s3.87 8.67 8.5 8.67c4.91 0 8.15-3.44 8.15-8.3 0-.56-.06-.97-.3-1.24z" />
        </svg>
      </Button>
    </a>
  </div>
</div>

            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}