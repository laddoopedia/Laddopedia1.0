'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '#products', label: 'Products' },
  { href: '/our-story', label: 'Our Story' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919999999999'

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      'Hi, I would like to know more about your products and place an order.'
    )
    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif text-2xl font-bold text-primary">Laddoopedia</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button onClick={handleWhatsAppClick} className="gap-2 bg-[#25D366] text-white hover:bg-[#128C7E]">
            <MessageCircle className="h-4 w-4" />
            Order on WhatsApp
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-border md:hidden">
          <div className="space-y-1 px-4 pb-4 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              onClick={handleWhatsAppClick}
              className="mt-4 w-full gap-2 bg-[#25D366] text-white hover:bg-[#128C7E]"
            >
              <MessageCircle className="h-4 w-4" />
              Order on WhatsApp
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
