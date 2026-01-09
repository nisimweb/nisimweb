import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nisimweb - Tu sitio web profesional por suscripción",
  description:
    "We design your site as you need it. Sitios web profesionales para tu negocio, listos en 72 horas, desde USD $25/mes. Hosting, mantenimiento y soporte incluido.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/logo-nisimweb.jpg",
      },
    ],
    apple: "/logo-nisimweb.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
