import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function AboutPreview() {
  return (
    <section className="bg-card py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl lg:order-first">
            <Image
              src="/images/about-preview.jpg"
              alt="Traditional laddoo making process"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
              Our Story
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Laddoopedia brings together traditional recipes with a modern touch. We believe in
              keeping the authentic taste of Indian sweets alive while adapting to the needs of
              health-conscious families. Every laddoo is handcrafted with pure ingredients and
              made fresh to order.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              We are not a factory. We are a small brand focused on freshness, quality, and trust.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" variant="outline" className="gap-2">
                <Link href="/our-story">
                  Read Our Story
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
