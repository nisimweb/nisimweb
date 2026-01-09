import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Cuánto tarda la entrega de mi web?",
    answer:
      "Una vez que recibimos toda tu información (textos, fotos, datos de contacto), tu web estará lista en 72 horas hábiles. En algunos casos puede ser incluso antes.",
  },
  {
    question: "¿Puedo cancelar cuando quiera?",
    answer:
      "Sí, no hay contratos de permanencia. Podés cancelar tu suscripción en cualquier momento sin penalidades. Tu web se dará de baja al finalizar el período pagado.",
  },
  {
    question: "¿Qué pasa si no me gusta el diseño?",
    answer:
      "Podés elegir otro diseño de nuestra galería sin costo adicional antes de la publicación. Una vez publicada la web, cambiar de plantilla tiene un costo adicional.",
  },
  {
    question: "¿Puedo usar mi propio dominio?",
    answer:
      "Sí, podés conectar tu dominio existente sin problemas. También te damos un subdominio gratuito si aún no tenés uno propio.",
  },
  {
    question: "¿Hay algún costo inicial o de setup?",
    answer: "No, no hay costo de setup. Solo pagás la suscripción mensual desde el primer mes.",
  },
  {
    question: "¿Qué tipo de cambios puedo pedir?",
    answer:
      "Incluimos cambios menores como actualización de textos, fotos, datos de contacto y ajustes de estilo. Cambios estructurales o funcionalidades nuevas pueden tener costo adicional.",
  },
  {
    question: "¿El hosting está realmente incluido?",
    answer:
      "Sí, el hosting, mantenimiento técnico y certificado SSL están incluidos en tu suscripción mensual. No tenés que preocuparte por nada técnico.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Preguntas frecuentes</h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Respuestas a las dudas más comunes sobre nuestro servicio.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
