import { Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gradient">eazy GPT</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Лучшие LLM-модели прямо в Telegram. Без VPN, с оплатой российскими картами.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Контакты</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Forko IT</p>
              <a
                href="mailto:info@forko-it.com"
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@forko-it.com
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Документы</h4>
            <div className="space-y-2 text-sm">
              <a
                href="https://docs.google.com/document/d/e/2PACX-1vQYEE0xkltKHM55tj_QLVyf8FqfcHFpN9xU8dBH8Wg4P2FFVxbKMLBPOj712MQ5ryxmeVuRA5tE632r/pub"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Публичная оферта
              </a>
              <a
                href="https://docs.google.com/document/d/e/2PACX-1vRCFKsQt4XYl94_QHMn6i-pkNxzNVjF9088EfQpwNOZ6GD92dgSNDI-TSuszyiycGP58o7OOkr0abnL/pub"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Политика обработки данных
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {currentYear} Forko IT. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
