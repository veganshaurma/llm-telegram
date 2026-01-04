import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                Лучшие LLM-модели — прямо в Telegram. <span className="text-gradient">Без VPN.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Модели от OpenAI в одном боте, оплата РФ-картами, понятный лимит токенов.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base" asChild>
                <a href="#pricing">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Подключить бота
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-base bg-transparent" asChild>
                <a href="#pricing">Посмотреть тариф</a>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">Ссылка на бота появится после подключения</p>
          </div>

          <div className="relative">
            <div className="glow-card bg-card border border-border rounded-2xl p-6 md:p-8 space-y-4">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <span className="font-semibold">eazy GPT</span>
              </div>

              <div className="space-y-4">
                <div className="bg-muted rounded-xl p-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      Model: OpenAI
                    </Badge>
                  </div>
                  <p className="text-sm">Составь маршрут путешествия по Италии на 7 дней</p>
                </div>

                <div className="bg-card border border-border rounded-xl p-4 space-y-2">
                  <p className="text-sm text-muted-foreground">
                    День 1-2: Рим - Колизей, Ватикан, фонтан Треви
                    <br />
                    День 3-4: Флоренция - Галерея Уффици, собор Дуомо
                    <br />
                    День 5-7: Венеция - площадь Сан-Марко, гондолы...
                  </p>
                </div>

                <div className="bg-muted rounded-xl p-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/20">
                      Model: Anthropic
                    </Badge>
                  </div>
                  <p className="text-sm">Какие документы нужны для поездки?</p>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Использовано токенов:</span>
                  <span className="font-semibold text-accent">12,450 / 500,000</span>
                </div>
                <div className="mt-2 h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[2.5%] bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
