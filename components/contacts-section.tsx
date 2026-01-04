"use client"
import { Mail, Building2 } from "lucide-react"

export function ContactsSection() {
  return (
    <section id="contacts" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Контакты</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Есть вопросы? Свяжитесь с нами</p>
        </div>

        <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="glow-card bg-card border border-border rounded-xl p-6 space-y-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Building2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Компания-разработчик</h3>
            <p className="text-2xl font-bold text-gradient">Forko IT</p>
          </div>

          <div className="glow-card bg-card border border-border rounded-xl p-6 space-y-4">
            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
              <Mail className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold">Email</h3>
            <a href="mailto:info@forko-it.com" className="text-xl text-primary hover:text-primary/80 transition-colors">
              info@forko-it.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
