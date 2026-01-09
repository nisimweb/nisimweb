"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div className="h-6 w-1.5 bg-foreground rounded-sm" />
              <div className="h-6 w-1.5 bg-foreground rounded-sm" />
            </div>
            <span className="text-lg font-semibold tracking-tight">TuWebPro</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#diseños"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Diseños
            </a>
            <a
              href="#precios"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Precios
            </a>
            <a
              href="#faq"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Preguntas
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button asChild>
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
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Diseños
              </a>
              <a
                href="#precios"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Precios
              </a>
              <a
                href="#faq"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
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
