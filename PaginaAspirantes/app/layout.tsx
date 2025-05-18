import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import MainNavigation from "@/components/main-navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ITSOEH - Instituto Tecnológico Superior del Occidente del Estado de Hidalgo",
  description: "Sitio oficial del Instituto Tecnológico Superior del Occidente del Estado de Hidalgo",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex min-h-screen flex-col">
            <MainNavigation />
            <main className="flex-1">{children}</main>
            <footer className="bg-primary py-6 text-primary-foreground">
              <div className="container text-center">
                <p>© {new Date().getFullYear()} Instituto Tecnológico Superior del Occidente del Estado de Hidalgo</p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
