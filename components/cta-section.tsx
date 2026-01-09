import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm mb-8 transition-all duration-300 hover:bg-primary-foreground/20">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Comienza hoy mismo</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">¿Listo para tener tu web profesional?</h2>
          <p className="mt-6 text-primary-foreground/80 text-lg leading-relaxed max-w-2xl mx-auto">
            Elegí tu diseño y en 72 horas tu negocio estará online. Sin complicaciones, sin sorpresas.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="mt-10 text-base shadow-xl shadow-foreground/10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5"
            asChild
          >
            <a href="#contacto">
              Elegir diseño y comenzar
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
