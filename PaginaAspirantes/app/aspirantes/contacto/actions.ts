"use server"

import { createServerSupabaseClient } from "@/lib/supabase"
import { z } from "zod"

// Esquema de validación para el formulario
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
  telefono: z.string().min(10, {
    message: "El teléfono debe tener al menos 10 dígitos.",
  }),
  carreraInteres: z.string({
    required_error: "Por favor selecciona una carrera de interés.",
  }),
  mensaje: z.string().min(10, {
    message: "El mensaje debe tener al menos 10 caracteres.",
  }),
})

export type ContactFormData = z.infer<typeof formSchema>

export async function submitContactForm(formData: ContactFormData) {
  try {
    // Validar los datos del formulario
    const validatedData = formSchema.parse(formData)

    // Crear cliente de Supabase
    const supabase = createServerSupabaseClient()

    // Insertar datos en la tabla contact_submissions
    const { data, error } = await supabase
      .from("contact_submissions")
      .insert([
        {
          nombre: validatedData.nombre,
          apellidos: validatedData.apellidos,
          email: validatedData.email,
          telefono: validatedData.telefono,
          carrera_interes: validatedData.carreraInteres,
          mensaje: validatedData.mensaje,
        },
      ])
      .select()

    if (error) {
      console.error("Error al insertar datos:", error)
      return {
        success: false,
        message: "Hubo un error al enviar tu mensaje. Por favor intenta de nuevo.",
      }
    }

    return {
      success: true,
      message: "Hemos recibido tu mensaje. Nos pondremos en contacto contigo pronto.",
      data,
    }
  } catch (error) {
    console.error("Error en submitContactForm:", error)
    return {
      success: false,
      message: "Hubo un error al procesar tu solicitud. Por favor intenta de nuevo.",
    }
  }
}
