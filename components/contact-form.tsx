"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CheckCircle2, Loader2 } from "lucide-react"

const designs = [
  { id: "inmobiliaria", name: "Inmobiliaria Pro" },
  { id: "abogados", name: "Legal Studio" },
  { id: "salud", name: "Clínica Vital" },
  { id: "restaurante", name: "Gastro Menu" },
  { id: "consultoria", name: "Consultor Pro" },
  { id: "fitness", name: "Fitness Zone" },
]

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [hasDomain, setHasDomain] = useState<string | undefined>()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section id="contacto" className="py-20 bg-card border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto text-center">
            <div className="h-16 w-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-8 w-8 text-success" />
            </div>
            <h2 className="text-2xl font-bold">¡Gracias por tu interés!</h2>
            <p className="mt-4 text-muted-foreground">
              Recibimos tu solicitud. Te contactaremos en las próximas 24 horas para comenzar con tu web.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contacto" className="py-20 bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Comenzá con tu web</h2>
            <p className="mt-2 text-muted-foreground">Completá el formulario y te contactamos en 24 hs.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="nombre">Nombre completo *</Label>
              <Input id="nombre" name="nombre" placeholder="Tu nombre" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" name="email" type="email" placeholder="tu@email.com" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="whatsapp">WhatsApp *</Label>
              <Input id="whatsapp" name="whatsapp" type="tel" placeholder="+54 11 1234 5678" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="negocio">Nombre de tu negocio *</Label>
              <Input id="negocio" name="negocio" placeholder="Ej: Inmobiliaria García" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="diseño">Diseño elegido *</Label>
              <Select name="diseño" required>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccioná un diseño" />
                </SelectTrigger>
                <SelectContent>
                  {designs.map((design) => (
                    <SelectItem key={design.id} value={design.id}>
                      {design.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label>¿Tenés dominio propio?</Label>
              <RadioGroup value={hasDomain} onValueChange={setHasDomain} className="flex gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="si" id="si" />
                  <Label htmlFor="si" className="font-normal cursor-pointer">
                    Sí, tengo dominio
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="no" />
                  <Label htmlFor="no" className="font-normal cursor-pointer">
                    No, necesito uno
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {hasDomain === "si" && (
              <div className="space-y-2">
                <Label htmlFor="dominio">Tu dominio</Label>
                <Input id="dominio" name="dominio" placeholder="www.tudominio.com" />
              </div>
            )}

            <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                "Enviar solicitud"
              )}
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              Al enviar este formulario aceptás ser contactado por nuestro equipo.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
