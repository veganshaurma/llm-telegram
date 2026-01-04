import { Code2, TrendingUp, Users, BarChart3, BookOpen, Briefcase } from "lucide-react"

const audiences = [
  {
    icon: Code2,
    title: "Разработчики",
    description: "Объяснить код, найти баг, набросать пример",
    example: "«Найди ошибку в этой функции» или «Напиши unit-тест для этого класса»",
  },
  {
    icon: TrendingUp,
    title: "Маркетинг и контент",
    description: "Идеи для постов, черновики статей, структуры контента",
    example: "«10 идей для поста в соцсетях про новый продукт» или «План статьи про SEO»",
  },
  {
    icon: Users,
    title: "Менеджеры и продакт",
    description: "Саммари встреч, планы спринтов, требования",
    example: "«Составь план спринта на основе этих задач» или «Напиши user story для функции»",
  },
  {
    icon: BarChart3,
    title: "Аналитики и исследования",
    description: "Сводки данных, сравнения, гипотезы",
    example: "«Проанализируй эти данные продаж» или «Сформулируй гипотезу для A/B теста»",
  },
  {
    icon: BookOpen,
    title: "Учёба и образование",
    description: "Разбор сложных тем, подготовка конспектов",
    example: "«Объясни простыми словами квантовую физику» или «Помоги составить план курсовой»",
  },
  {
    icon: Briefcase,
    title: "Бизнес и коммуникации",
    description: "Деловые письма, предложения, тексты для клиентов",
    example: "«Напиши письмо партнёру» или «Составь коммерческое предложение»",
  },
]

export function ForWhomSection() {
  return (
    <section id="for-whom" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Для кого</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            eazy GPT полезен для самых разных задач и профессий
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((audience, index) => (
            <div key={index} className="glow-card bg-card border border-border rounded-xl p-6 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <audience.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">{audience.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{audience.description}</p>
              <div className="pt-2 border-t border-border">
                <p className="text-sm text-muted-foreground italic">Пример: {audience.example}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
