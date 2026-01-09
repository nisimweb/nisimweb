import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Check, Sparkles } from "lucide-react"

const features = [
  "Web profesional optimizada",
  "Hosting incluido",
  "Certificado SSL (https)",
  "Botón de WhatsApp",
  "Formulario de contacto",
  "Optimización SEO básica",
  "Soporte por email",
  "Cambios menores incluidos",
  "Subdominio gratuito",
]

export function PricingSection() {
  return (
    <section id="precios" className="py-16 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Un plan simple, sin sorpresas</h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Todo lo que necesitás para tener presencia online profesional.
          </p>
        </div>

        <Card className="max-w-md mx-auto border-primary/20 shadow-xl shadow-primary/5 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1">
          <CardHeader className="text-center pb-6 pt-8 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-medium shadow-lg shadow-primary/30">
                <Sparkles className="h-3 w-3" />
                Más popular
              </span>
            </div>
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Plan Profesional</p>
            <div className="mt-6">
              <span className="text-6xl font-bold text-foreground">$25</span>
              <span className="text-muted-foreground ml-2 text-lg">USD/mes</span>
            </div>
          </CardHeader>
          <CardContent className="pt-0 px-8">
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 transition-all duration-300 hover:translate-x-1">
                  <span className="flex items-center justify-center h-5 w-5 rounded-full bg-success/10 shrink-0">
                    <Check className="h-3 w-3 text-success" />
                  </span>
                  <span className="text-sm text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-5 bg-gradient-to-br from-secondary to-accent/30 rounded-xl border border-border/50">
              <p className="text-sm text-center text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Sin contrato.</strong> Pago mensual. Cancela cuando quieras sin
                penalidades.
              </p>
            </div>
          </CardContent>
          <CardFooter className="px-8 pb-8 pt-4">
            <Button
              className="w-full shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30"
              size="lg"
              asChild
            >
              <a href="#contacto">Comenzar ahora</a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
