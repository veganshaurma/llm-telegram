import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const features = [
  "500 000 токенов",
  "Доступ к моделям OpenAI",
  "Доступ к моделям Anthropic",
  "Работает без VPN",
  "Оплата российскими картами",
  "Прозрачный счётчик токенов",
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Тариф</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Один тариф с доступом ко всем возможностям</p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="glow-card bg-card border-2 border-primary/20 rounded-2xl p-8 space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold">Пакет токенов</h3>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl font-bold text-gradient">2500 ₽</span>
              </div>
              <p className="text-sm text-muted-foreground">за 500 000 токенов</p>
            </div>

            <div className="space-y-3 py-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-accent" />
                  </div>
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="w-full text-base" asChild>
              <a href="https://t.me/eazygptbot">Подключить бота</a>
            </Button>


            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong>Что такое токены?</strong> Токены — это объём текста в запросах и ответах. Расход зависит от
                длины диалога. Обычно один токен ≈ 0,75 слова.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
