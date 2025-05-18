import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Este middleware es un ejemplo básico y debería ser reemplazado por un sistema de autenticación real
export function middleware(request: NextRequest) {
  // Verificar si la ruta comienza con /admin
  if (request.nextUrl.pathname.startsWith("/admin")) {
    // Aquí se implementaría la lógica de autenticación real
    // Por ahora, simplemente permitimos el acceso a todas las rutas admin
    // En un sistema real, verificarías si el usuario está autenticado y tiene permisos
    // Ejemplo de redirección si no está autenticado:
    // return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}
