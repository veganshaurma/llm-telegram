import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin", "cyrillic"] })
const _geistMono = Geist_Mono({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  title: "eazy GPT — LLM в Telegram без VPN",
  description:
    "Доступ к лучшим LLM-моделям от OpenAI и Anthropic прямо в Telegram. Без VPN, оплата российскими картами, 2500 ₽/месяц, 500 000 токенов.",
  generator: "v0.app",
  keywords: ["OpenAI", "GPT", "Telegram", "бот", "LLM", "AI", "нейросеть", "без VPN"],
  openGraph: {
    title: "eazy GPT — LLM в Telegram без VPN",
    description: "Доступ к лучшим LLM-моделям от OpenAI и Anthropic. Без VPN, оплата РФ-картами.",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="dark">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
