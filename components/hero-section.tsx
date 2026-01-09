import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-background to-background" />
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-accent/30 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 transition-all duration-300 hover:bg-accent">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Simple. Profesional. Asequible.</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-tight">
            Tu web profesional lista en 72 horas, desde <span className="text-primary">USD $25/mes</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            Sitios web diseñados para profesionales y pequeños negocios. Sin complicaciones técnicas, sin contratos
            largos.
          </p>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-10 text-sm">
            {["Hosting incluido", "Soporte incluido", "Cancela cuando quieras"].map((feature, index) => (
              <span
                key={index}
                className="flex items-center gap-2 text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                <span className="flex items-center justify-center h-5 w-5 rounded-full bg-success/10">
                  <Check className="h-3 w-3 text-success" />
                </span>
                {feature}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
            <Button
              size="lg"
              asChild
              className="text-base shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              <a href="#diseños">
                Ver diseños disponibles
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-base bg-background/50 backdrop-blur-sm transition-all duration-300 hover:bg-background hover:-translate-y-0.5"
            >
              <a href="#contacto">Quiero mi web</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
