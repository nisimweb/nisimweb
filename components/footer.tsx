import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Image src="/logo-nisimweb.jpg" alt="Nisimweb" width={32} height={32} className="rounded-sm" />
            <span className="inline-flex items-center font-bold">
              NISIM<span className="bg-foreground text-background px-1.5 py-0.5 ml-0.5 text-xs">WEB</span>
            </span>
          </div>

          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#diseños" className="hover:text-primary transition-colors duration-300">
              Diseños
            </a>
            <a href="#precios" className="hover:text-primary transition-colors duration-300">
              Precios
            </a>
            <a href="#faq" className="hover:text-primary transition-colors duration-300">
              FAQ
            </a>
            <a href="#contacto" className="hover:text-primary transition-colors duration-300">
              Contacto
            </a>
          </nav>

          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Nisimweb</p>
        </div>
      </div>
    </footer>
  )
}
