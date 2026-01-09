"use client"

import { User, Store, Wrench } from "lucide-react"

export function TargetAudienceSection() {
  const idealFor = [
    {
      icon: User,
      title: "Profesionales independientes",
      description: "Abogados, psicólogos, contadores, médicos, coaches, consultores",
    },
    {
      icon: Store,
      title: "Negocios pequeños",
      description: "Inmobiliarias, restaurantes, tiendas, gimnasios, clínicas",
    },
    {
      icon: Wrench,
      title: "Servicios locales",
      description: "Electricistas, plomeros, mecánicos, fotógrafos, diseñadores",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-card to-secondary/30 border-y border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">¿Para quién es este servicio?</h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Diseñado para quienes quieren una web profesional sin lidiar con la parte técnica.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {idealFor.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center p-8 rounded-2xl bg-background border border-transparent transition-all duration-500 hover:border-border hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
            >
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110">
                <item.icon className="h-7 w-7 text-primary transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-lg mb-3 transition-colors duration-300 group-hover:text-primary">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
