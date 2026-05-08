import { Package, Clock, MessageCircle } from 'lucide-react'

const infoItems = [
  { icon: Package, text: 'Free delivery above ₹499' },
  { icon: Clock, text: 'Same-day dispatch' },
  { icon: MessageCircle, text: 'WhatsApp support' },
]

export function InfoStrip() {
  return (
    <div className="bg-primary py-3">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-primary-foreground sm:gap-8">
          {infoItems.map((item, index) => (
            <div key={item.text} className="flex items-center gap-2">
              <item.icon className="h-4 w-4" aria-hidden="true" />
              <span>{item.text}</span>
              {index < infoItems.length - 1 && (
                <span className="ml-4 hidden text-primary-foreground/60 sm:inline">|</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
