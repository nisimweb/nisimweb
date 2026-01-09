"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <Image src="/logo-nisimweb.jpg" alt="Nisimweb" width={40} height={40} className="rounded-sm" />
            <span className="inline-flex items-center text-lg font-bold tracking-tight">
              NISIM<span className="bg-foreground text-background px-1.5 py-0.5 ml-0.5 text-sm">WEB</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#diseños"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Diseños
            </a>
            <a
              href="#precios"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Precios
            </a>
            <a
              href="#faq"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Preguntas
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button asChild className="transition-all duration-300 hover:scale-105">
              <a href="#contacto">Comenzar ahora</a>
            </Button>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <a
                href="#diseños"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Diseños
              </a>
              <a
                href="#precios"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Precios
              </a>
              <a
                href="#faq"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Preguntas
              </a>
              <Button asChild className="w-full">
                <a href="#contacto">Comenzar ahora</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
