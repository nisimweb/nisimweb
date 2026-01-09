export function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div className="h-5 w-1 bg-foreground rounded-sm" />
              <div className="h-5 w-1 bg-foreground rounded-sm" />
            </div>
            <span className="font-semibold">TuWebPro</span>
          </div>

          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#diseños" className="hover:text-foreground transition-colors">
              Diseños
            </a>
            <a href="#precios" className="hover:text-foreground transition-colors">
              Precios
            </a>
            <a href="#faq" className="hover:text-foreground transition-colors">
              FAQ
            </a>
            <a href="#contacto" className="hover:text-foreground transition-colors">
              Contacto
            </a>
          </nav>

          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} TuWebPro</p>
        </div>
      </div>
    </footer>
  )
}
