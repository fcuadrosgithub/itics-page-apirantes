// Este archivo simula una conexión a base de datos
// En un entorno real, aquí se implementaría la conexión a la base de datos elegida
// como Supabase, MongoDB, MySQL, etc.

export type ContactFormData = {
  id: string
  nombre: string
  apellidos: string
  email: string
  telefono: string
  carreraInteres: string
  mensaje: string
  fechaEnvio: Date
}

// Simulación de base de datos en memoria
const contactFormSubmissions: ContactFormData[] = []

export async function saveContactForm(data: Omit<ContactFormData, "id" | "fechaEnvio">) {
  const newSubmission: ContactFormData = {
    ...data,
    id: generateId(),
    fechaEnvio: new Date(),
  }

  contactFormSubmissions.push(newSubmission)
  console.log("Formulario guardado:", newSubmission)

  return newSubmission
}

export async function getAllContactSubmissions() {
  return contactFormSubmissions
}

// Función auxiliar para generar IDs únicos
function generateId() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}
