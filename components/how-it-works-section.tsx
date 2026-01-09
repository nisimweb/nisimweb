import { Palette, FileText, Rocket } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      icon: Palette,
      number: "1",
      title: "Elegí un diseño",
      description: "Explorá nuestros diseños profesionales y elegí el que mejor se adapte a tu negocio.",
    },
    {
      icon: FileText,
      number: "2",
      title: "Completá tus datos",
      description: "Envianos la información básica de tu negocio: textos, fotos y datos de contacto.",
    },
    {
      icon: Rocket,
      number: "3",
      title: "¡Listo en 72 hs!",
      description: "Publicamos tu web optimizada y lista para recibir clientes.",
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent/20 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-secondary rounded-full blur-3xl -translate-y-1/2" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Cómo funciona</h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            En 3 simples pasos tenés tu web profesional funcionando.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-8">
                  <div className="h-20 w-20 rounded-3xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/20 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-primary/30 group-hover:scale-105">
                    <step.icon className="h-9 w-9 text-primary-foreground" />
                  </div>
                  <span className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-background border-2 border-primary text-sm font-bold flex items-center justify-center text-primary shadow-md transition-transform duration-300 group-hover:scale-110">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-semibold text-xl mb-3 transition-colors duration-300 group-hover:text-primary">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/30 via-primary/20 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
