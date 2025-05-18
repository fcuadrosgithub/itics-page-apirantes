import { createServerSupabaseClient } from "@/lib/supabase"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { formatDistanceToNow } from "date-fns"
import { es } from "date-fns/locale"

export default async function ContactosAdminPage() {
  const supabase = createServerSupabaseClient()

  // Obtener los mensajes de contacto
  const { data: contactos, error } = await supabase
    .from("contact_submissions")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error al obtener los contactos:", error)
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Panel de Administración - Mensajes de Contacto</h1>

      <Card>
        <CardHeader>
          <CardTitle>Mensajes Recibidos</CardTitle>
          <CardDescription>Lista de todos los mensajes enviados a través del formulario de contacto.</CardDescription>
        </CardHeader>
        <CardContent>
          {error ? (
            <p className="text-destructive">Error al cargar los mensajes: {error.message}</p>
          ) : contactos && contactos.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nombre</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Teléfono</TableHead>
                  <TableHead>Carrera</TableHead>
                  <TableHead>Mensaje</TableHead>
                  <TableHead>Fecha</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {contactos.map((contacto) => (
                  <TableRow key={contacto.id}>
                    <TableCell className="font-medium">
                      {contacto.nombre} {contacto.apellidos}
                    </TableCell>
                    <TableCell>{contacto.email}</TableCell>
                    <TableCell>{contacto.telefono}</TableCell>
                    <TableCell>{formatCarrera(contacto.carrera_interes)}</TableCell>
                    <TableCell className="max-w-xs truncate">{contacto.mensaje}</TableCell>
                    <TableCell>
                      {contacto.created_at ? (
                        <span title={new Date(contacto.created_at).toLocaleString()}>
                          {formatDistanceToNow(new Date(contacto.created_at), {
                            addSuffix: true,
                            locale: es,
                          })}
                        </span>
                      ) : (
                        "N/A"
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <p className="text-center py-8 text-muted-foreground">No hay mensajes de contacto todavía.</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

function formatCarrera(carreraId: string): string {
  const carreras: Record<string, string> = {
    civil: "Ingeniería Civil",
    industrial: "Ingeniería Industrial",
    alimentarias: "Ingeniería en Industrias Alimentarias",
    electromecanica: "Ingeniería en Electromecánica",
    sistemas: "Ingeniería en Sistemas Computacionales",
    gestion: "Ingeniería en Gestión Empresarial",
    arquitectura: "Arquitectura",
    tic: "Ingeniería en Tecnologías de la Información y Comunicaciones",
    logistica: "Ingeniería en Logística",
  }

  return carreras[carreraId] || carreraId
}
