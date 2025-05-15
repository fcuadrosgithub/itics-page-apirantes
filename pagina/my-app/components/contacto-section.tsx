import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Clock, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function ContactoSection() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-[#1B396A] mb-6">Contacto</h2>
      <p className="text-gray-700 mb-8">
        ¿Tienes dudas sobre el proceso de admisión? Estamos aquí para ayudarte. Contáctanos a través de cualquiera de
        nuestros canales de comunicación.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Envíanos un mensaje</CardTitle>
            <CardDescription>Completa el formulario y te responderemos a la brevedad</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre completo</Label>
                  <Input id="nombre" placeholder="Ingresa tu nombre completo" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input id="email" type="email" placeholder="ejemplo@correo.com" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="asunto">Asunto</Label>
                <Input id="asunto" placeholder="Asunto de tu mensaje" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mensaje">Mensaje</Label>
                <Textarea id="mensaje" placeholder="Escribe tu mensaje aquí..." rows={5} />
              </div>

              <Button type="submit" className="w-full bg-[#006341] hover:bg-[#004d33]">
                Enviar Mensaje
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Información de Contacto</CardTitle>
            <CardDescription>Otras formas de comunicarte con nosotros</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start">
              <MapPin className="h-5 w-5 text-[#006341] mr-3 mt-0.5" />
              <div>
                <h4 className="font-medium">Dirección</h4>
                <p className="text-sm text-gray-600">
                  Av. Universidad 123, Col. Centro
                  <br />
                  Ciudad de México, México
                  <br />
                  CP 12345
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="h-5 w-5 text-[#006341] mr-3 mt-0.5" />
              <div>
                <h4 className="font-medium">Teléfonos</h4>
                <p className="text-sm text-gray-600">
                  (55) 1234-5678
                  <br />
                  (55) 8765-4321
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Mail className="h-5 w-5 text-[#006341] mr-3 mt-0.5" />
              <div>
                <h4 className="font-medium">Correo Electrónico</h4>
                <p className="text-sm text-gray-600">
                  admisiones@upmx.edu.mx
                  <br />
                  contacto@upmx.edu.mx
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Clock className="h-5 w-5 text-[#006341] mr-3 mt-0.5" />
              <div>
                <h4 className="font-medium">Horario de Atención</h4>
                <p className="text-sm text-gray-600">
                  Lunes a Viernes: 9:00 - 18:00 hrs
                  <br />
                  Sábados: 9:00 - 13:00 hrs
                </p>
              </div>
            </div>

            <div className="pt-4 border-t">
              <h4 className="font-medium mb-2">Síguenos en redes sociales</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-[#1B396A]">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-[#1B396A]">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-[#1B396A]">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-[#1B396A]">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
