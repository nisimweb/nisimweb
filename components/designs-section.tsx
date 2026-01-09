import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ExternalLink, ArrowRight } from "lucide-react"

const designs = [
  {
    id: "inmobiliaria",
    name: "Inmobiliaria Pro",
    category: "Inmobiliarias",
    image: "/modern-real-estate-website-design-clean-minimal.jpg",
    demoUrl: "#",
  },
  {
    id: "abogados",
    name: "Legal Studio",
    category: "Abogados",
    image: "/professional-law-firm-website-design-elegant.jpg",
    demoUrl: "#",
  },
  {
    id: "salud",
    name: "Clínica Vital",
    category: "Salud y Bienestar",
    image: "/healthcare-clinic-website-design-modern-clean.jpg",
    demoUrl: "#",
  },
  {
    id: "restaurante",
    name: "Gastro Menu",
    category: "Restaurantes",
    image: "/restaurant-website-design-modern-food-photography.jpg",
    demoUrl: "#",
  },
  {
    id: "consultoria",
    name: "Consultor Pro",
    category: "Consultores",
    image: "/consulting-business-website-professional-minimal.jpg",
    demoUrl: "#",
  },
  {
    id: "fitness",
    name: "Fitness Zone",
    category: "Gimnasios",
    image: "/fitness-gym-website-modern-energetic-design.jpg",
    demoUrl: "#",
  },
]

export function DesignsSection() {
  return (
    <section
      id="diseños"
      className="py-24 bg-gradient-to-b from-card via-card to-secondary/30 border-y border-border/50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Diseños disponibles</h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Todos nuestros diseños están optimizados para convertir visitantes en clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {designs.map((design) => (
            <Card
              key={design.id}
              className="overflow-hidden group border-border/50 bg-background transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2 hover:border-primary/20"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={design.image || "/placeholder.svg"}
                    alt={design.name}
                    className="w-full h-52 object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-medium text-primary uppercase tracking-wider">{design.category}</p>
                  <h3 className="font-semibold text-lg mt-1.5 transition-colors duration-300 group-hover:text-primary">
                    {design.name}
                  </h3>
                </div>
              </CardContent>
              <CardFooter className="px-5 pb-5 pt-0 gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 bg-transparent transition-all duration-300 hover:bg-secondary"
                  asChild
                >
                  <a href={design.demoUrl} target="_blank" rel="noopener noreferrer">
                    Ver demo
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </a>
                </Button>
                <Button
                  size="sm"
                  className="flex-1 transition-all duration-300 hover:shadow-md hover:shadow-primary/20"
                  asChild
                >
                  <a href={`#contacto?diseño=${design.id}`}>
                    Elegir
                    <ArrowRight className="ml-2 h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
