import Link from 'next/link'
import { MessageCircle, Instagram } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '#products', label: 'Products' },
  { href: '/our-story', label: 'Our Story' },
  { href: '#contact', label: 'Contact' },
]

export function Footer() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+919251197355'
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl font-bold text-primary">Laddoopedia</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Fresh handmade sweets crafted with love and tradition.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground">Get in Touch</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <MessageCircle className="h-4 w-4 text-[#25D366]" />
                  WhatsApp: +91 {whatsappNumber.slice(2)}
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/laddoopedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Instagram className="h-4 w-4 text-[#E4405F]" />
                  @laddoopedia
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-border pt-6">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {currentYear} Laddoopedia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
