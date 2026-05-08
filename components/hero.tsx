'use client'

import Image from 'next/image'
import { MessageCircle, ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919999999999'

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      'Hi, I would like to place an order for laddoos. Please share the menu and prices.'
    )
    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      '_blank',
      'noopener,noreferrer'
    )
  }

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              <span className="text-balance">Fresh, Handmade Laddoos Delivered</span>{' '}
              <span className="text-primary">Across India</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Made with pure desi ghee. No preservatives. Order directly on WhatsApp.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={handleWhatsAppClick}
                className="gap-2 bg-[#25D366] text-white hover:bg-[#128C7E]"
              >
                <MessageCircle className="h-5 w-5" />
                Order on WhatsApp
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToProducts}
                className="gap-2"
              >
                Explore Products
                <ArrowDown className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none">
            <div className="absolute inset-0 rounded-full bg-primary/10" />
            <Image
              src="/images/hero-laddoo.jpg"
              alt="Assortment of fresh handmade laddoos"
              fill
              className="rounded-3xl object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
