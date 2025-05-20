"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="bg-[#003865] text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold tracking-wide">
          ITSOEH
        </Link>
        <nav className="flex items-center space-x-6">
          <Link href="/alumnos" className="hover:underline">Alumnos</Link>
          <Link href="/docentes" className="hover:underline">Docentes</Link>
          <Link href="/aspirantes" className="hover:underline">Aspirantes</Link>
          <Link href="/publico" className="hover:underline">Público</Link>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="ml-4"
            aria-label="Cambiar tema"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>
      </div>
    </header>
  );
}
