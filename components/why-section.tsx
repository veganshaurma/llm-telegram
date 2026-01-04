import { Shield, CreditCard, Zap, Globe, Sparkles, BarChart } from "lucide-react"

const benefits = [
  {
    icon: Globe,
    title: "Без VPN",
    description: "Работает напрямую в России, никаких дополнительных настроек не требуется",
  },
  {
    icon: Sparkles,
    title: "Один пакет вместо двух",
    description: "Доступ к OpenAI и Anthropic в одном месте — не нужно покупать два пакета",
  },
  {
    icon: CreditCard,
    title: "Оплата РФ-картой",
    description: "Принимаем российские банковские карты, зарубежные карты не требуются",
  },
  {
    icon: Zap,
    title: "Быстрый старт в Telegram",
    description: "Никаких сложных настроек — просто напишите боту и получите ответ",
  },
  {
    icon: Shield,
    title: "Доступ к топовым моделям",
    description: "Используйте лучшие модели от OpenAI и Anthropic для любых задач",
  },
  {
    icon: BarChart,
    title: "Прозрачный лимит токенов",
    description: "Всегда видите, сколько токенов использовали и сколько осталось",
  },
]

export function WhySection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Почему <span className="text-gradient">eazy GPT</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Простой и удобный способ получить доступ к лучшим AI-моделям
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="glow-card bg-card border border-border rounded-xl p-6 space-y-4 hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
