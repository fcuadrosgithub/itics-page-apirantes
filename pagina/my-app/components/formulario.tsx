"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format, parse } from "date-fns"
import { es } from "date-fns/locale"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { db } from "@/lib/firebase"
import { collection, addDoc, Timestamp } from "firebase/firestore"

export default function FormularioPreRegistro() {
  const [date, setDate] = useState<Date>()
  const [manualDate, setManualDate] = useState("")
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const [datos, setDatos] = useState({
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    curp: "",
    telefono: "",
    email: "",
    confirmarEmail: "",
    escuelaProcedencia: "",
    promedio: "",
    carrera: "",
    segundaCarrera: "",
    aceptaTerminos: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target
    setDatos((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }))
  }

  const handleManualDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setManualDate(value)
    const parsed = parse(value, "yyyy-MM-dd", new Date())
    if (!isNaN(parsed.getTime())) setDate(parsed)
  }

  const resetForm = () => {
    setDatos({
      nombre: "",
      apellidoPaterno: "",
      apellidoMaterno: "",
      curp: "",
      telefono: "",
      email: "",
      confirmarEmail: "",
      escuelaProcedencia: "",
      promedio: "",
      carrera: "",
      segundaCarrera: "",
      aceptaTerminos: false,
    })
    setDate(undefined)
    setManualDate("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage("")
    setSubmitSuccess(false)

    if (!datos.aceptaTerminos) {
      setErrorMessage("Debes aceptar los términos y condiciones.")
      return
    }

    if (datos.email !== datos.confirmarEmail) {
      setErrorMessage("Los correos no coinciden.")
      return
    }

    try {
      await addDoc(collection(db, "aspirantes"), {
        ...datos,
        fechaNacimiento: date ? Timestamp.fromDate(date) : null,
        fechaRegistro: Timestamp.now(),
      })
      setSubmitSuccess(true)
      resetForm()
    } catch (error) {
      console.error("Error al enviar registro:", error)
      setErrorMessage("Hubo un error al enviar los datos.")
    }
  }

  return (
    <div className="space-y-6">
      {submitSuccess && (
        <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg">
          Registro enviado con éxito. ¡Gracias!
        </div>
      )}

      {errorMessage && (
        <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg">
          {errorMessage}
        </div>
      )}

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[#1B396A]">Datos Personales</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nombre">Nombre(s) *</Label>
              <Input id="nombre" value={datos.nombre} onChange={handleChange} placeholder="Ingresa tu(s) nombre(s)" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="apellidoPaterno">Apellido Paterno *</Label>
              <Input id="apellidoPaterno" value={datos.apellidoPaterno} onChange={handleChange} placeholder="Ingresa tu apellido paterno" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="apellidoMaterno">Apellido Materno *</Label>
              <Input id="apellidoMaterno" value={datos.apellidoMaterno} onChange={handleChange} placeholder="Ingresa tu apellido materno" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="fecha-nacimiento">Fecha de Nacimiento *</Label>
              <div className="flex flex-col gap-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP", { locale: es }) : "Selecciona una fecha"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                  </PopoverContent>
                </Popover>
                <Input
                  type="date"
                  value={manualDate}
                  onChange={handleManualDateChange}
                  placeholder="YYYY-MM-DD"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="curp">CURP *</Label>
              <Input id="curp" value={datos.curp} onChange={handleChange} placeholder="Ingresa tu CURP" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="telefono">Teléfono Celular *</Label>
              <Input id="telefono" type="tel" value={datos.telefono} onChange={handleChange} placeholder="Ej. 5512345678" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Correo Electrónico *</Label>
              <Input id="email" type="email" value={datos.email} onChange={handleChange} placeholder="ejemplo@correo.com" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmarEmail">Confirmar Correo Electrónico *</Label>
              <Input id="confirmarEmail" type="email" value={datos.confirmarEmail} onChange={handleChange} placeholder="ejemplo@correo.com" required />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[#1B396A]">Datos Académicos</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="escuelaProcedencia">Escuela de Procedencia *</Label>
              <Input id="escuelaProcedencia" value={datos.escuelaProcedencia} onChange={handleChange} placeholder="Nombre de tu bachillerato" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="promedio">Promedio General *</Label>
              <Input id="promedio" type="number" step="0.01" min="6" max="10" value={datos.promedio} onChange={handleChange} placeholder="Ej. 8.5" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="carrera">Carrera de Interés *</Label>
              <Select onValueChange={(value) => setDatos({ ...datos, carrera: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona una carrera" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sistemas">Ingeniería en Sistemas Computacionales</SelectItem>
                  <SelectItem value="industrial">Ingeniería Industrial</SelectItem>
                  <SelectItem value="civil">Ingeniería Civil</SelectItem>
                  <SelectItem value="mecatronica">Ingeniería Mecatrónica</SelectItem>
                  <SelectItem value="administracion">Licenciatura en Administración</SelectItem>
                  <SelectItem value="derecho">Licenciatura en Derecho</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="segundaCarrera">Segunda Opción de Carrera</Label>
              <Select onValueChange={(value) => setDatos({ ...datos, segundaCarrera: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona una carrera (opcional)" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sistemas">Ingeniería en Sistemas Computacionales</SelectItem>
                  <SelectItem value="industrial">Ingeniería Industrial</SelectItem>
                  <SelectItem value="civil">Ingeniería Civil</SelectItem>
                  <SelectItem value="mecatronica">Ingeniería Mecatrónica</SelectItem>
                  <SelectItem value="administracion">Licenciatura en Administración</SelectItem>
                  <SelectItem value="derecho">Licenciatura en Derecho</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="aceptaTerminos" checked={datos.aceptaTerminos} onCheckedChange={(val) => setDatos({ ...datos, aceptaTerminos: !!val })} />
            <label htmlFor="aceptaTerminos" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Acepto los términos y condiciones y el aviso de privacidad
            </label>
          </div>
        </div>

        <Button type="submit" className="w-full bg-[#006341] hover:bg-[#004d33]">
          Enviar Solicitud
        </Button>
      </form>
    </div>
  )
}