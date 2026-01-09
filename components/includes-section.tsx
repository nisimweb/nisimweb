import { Check, X } from "lucide-react"

const included = [
  "Diseño profesional pre-armado",
  "Hosting y mantenimiento",
  "Certificado de seguridad SSL",
  "Botón de WhatsApp",
  "Formulario de contacto funcional",
  "Optimización para móviles",
  "Cambios de texto e imágenes",
  "Soporte técnico por email",
]

const notIncluded = [
  "Desarrollo a medida",
  "Funcionalidades complejas (e-commerce, reservas, etc.)",
  "Rediseños completos",
  "Cambios ilimitados de estructura",
  "Soporte telefónico 24/7",
  "Dominio propio (podés usar el tuyo)",
]

export function IncludesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-card to-secondary/30 border-y border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">¿Qué incluye y qué no?</h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Queremos ser claros desde el principio para evitar malos entendidos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-background p-8 rounded-2xl border border-border/50 shadow-sm transition-all duration-500 hover:shadow-lg hover:shadow-success/5 hover:-translate-y-1">
            <h3 className="font-semibold text-lg mb-6 flex items-center gap-3">
              <span className="h-8 w-8 rounded-full bg-success/10 flex items-center justify-center">
                <Check className="h-4 w-4 text-success" />
              </span>
              Incluido
            </h3>
            <ul className="space-y-4">
              {included.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm transition-all duration-300 hover:translate-x-1"
                >
                  <span className="flex items-center justify-center h-5 w-5 rounded-full bg-success/10 shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-success" />
                  </span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-background p-8 rounded-2xl border border-border/50 shadow-sm transition-all duration-500 hover:shadow-lg hover:shadow-destructive/5 hover:-translate-y-1">
            <h3 className="font-semibold text-lg mb-6 flex items-center gap-3">
              <span className="h-8 w-8 rounded-full bg-destructive/10 flex items-center justify-center">
                <X className="h-4 w-4 text-destructive" />
              </span>
              No incluido
            </h3>
            <ul className="space-y-4">
              {notIncluded.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm text-muted-foreground transition-all duration-300 hover:translate-x-1"
                >
                  <span className="flex items-center justify-center h-5 w-5 rounded-full bg-destructive/10 shrink-0 mt-0.5">
                    <X className="h-3 w-3 text-destructive/70" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
