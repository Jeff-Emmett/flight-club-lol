import type React from "react"
import type { Metadata } from "next"
import { Nunito, JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-sans",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Flight Club - Collective Protection from Flight Price Gouging",
  description:
    "An ergodically aligned mutual pool protecting members from last-minute flight price volatility. Because paying 10x for the same seat shouldn't be normal.",
  keywords:
    "flight prices, mutual insurance, collective buying, flight options, price protection, last minute flights, price gouging, mutual aid",
  openGraph: {
    title: "Flight Club",
    description: "Stop getting gouged on last-minute flights. Join the pool.",
    url: "https://flightclub.lol",
    siteName: "Flight Club",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Flight Club - We're just friends who hate paying $800 for a $200 flight :)",
    description: "Collective protection from algorithmic price extraction.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${nunito.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
