import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Нужен ли VPN для использования eazy GPT?",
    answer: "Нет, VPN не требуется. Бот работает напрямую в России без каких-либо дополнительных настроек.",
  },
  {
    question: "Какие модели доступны?",
    answer:
      "Вы получаете доступ к лучшим моделям от OpenAI (включая GPT-4) и Anthropic (включая Claude). Можете переключаться между ними в зависимости от задачи.",
  },
  {
    question: "Почему одна подписка, если модели от разных провайдеров?",
    answer:
      "Мы интегрировали доступ к обоим провайдерам в одном боте, чтобы вам не нужно было покупать две отдельные подписки. Это удобнее и выгоднее.",
  },
  {
    question: "Что такое токены и как они расходуются?",
    answer:
      "Токены — это единицы измерения объёма текста. Они расходуются как на ваши запросы, так и на ответы моделей. Чем длиннее диалог, тем больше токенов используется. В среднем один токен ≈ 0,75 слова. Вы всегда видите текущий расход в боте.",
  },
  {
    question: "Что будет, если токены закончатся до конца месяца?",
    answer:
      "Варианты зависят от условий подписки. Подробная информация о возможностях докупки или переноса токенов будет указана в публичной оферте.",
  },
  {
    question: "Можно ли оплатить российской банковской картой?",
    answer: "Да, мы принимаем оплату российскими банковскими картами. Зарубежные карты не требуются.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Часто задаваемые вопросы</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ответы на популярные вопросы о работе с eazy GPT
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:glow-card"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
