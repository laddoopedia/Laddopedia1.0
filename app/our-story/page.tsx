import type { Metadata } from 'next'
import Image from 'next/image'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'

export const metadata: Metadata = {
  title: 'Our Story - Laddoopedia',
  description: 'Learn about Laddoopedia - our journey of bringing traditional Indian sweets with a modern, honest approach. Quality, freshness, and trust.',
}

export default function OurStoryPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="font-serif text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
                Our Story
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                A journey of tradition, quality, and trust
              </p>
            </div>
          </div>
        </section>

        {/* Story Content */}
        <section className="pb-16 sm:pb-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            {/* Main Image */}
            <div className="relative mx-auto mb-12 aspect-[16/9] max-w-3xl overflow-hidden rounded-2xl">
              <Image
                src="/images/our-story-hero.jpg"
                alt="Traditional sweet making"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            {/* Content */}
            <div className="prose prose-lg mx-auto max-w-3xl">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Laddoopedia started with a simple idea — to bring back the true taste of 
                traditional Indian sweets in a modern, honest way.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                In a time where most sweets are mass-produced and filled with preservatives, 
                we wanted to create something different. Something real.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Every laddoo we make is crafted using simple ingredients, traditional methods, 
                and a focus on quality over quantity. We use pure desi ghee, premium dry fruits, 
                and time-tested recipes passed down through generations.
              </p>

              {/* Values Section */}
              <div className="my-12 grid gap-6 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    Pure Ingredients
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Only the finest desi ghee, premium nuts, and natural sweeteners.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    No Preservatives
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Made fresh to order. No artificial additives or chemicals.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    Traditional Methods
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Recipes and techniques passed down through generations.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    Modern Options
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Sugar-free and healthier alternatives for modern lifestyles.
                  </p>
                </div>
              </div>

              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                We also offer sugar-free and healthier options for modern lifestyles. Whether you 
                are managing diabetes, watching your sugar intake, or simply prefer natural 
                sweeteners, we have options crafted just for you.
              </p>

              {/* Highlight Box */}
              <div className="my-12 rounded-2xl bg-primary/10 p-8 text-center">
                <p className="font-serif text-xl font-semibold text-foreground">
                  We are not a factory.
                </p>
                <p className="mt-2 text-lg text-muted-foreground">
                  We are a brand focused on freshness, quality, and trust.
                </p>
              </div>

              <p className="text-lg leading-relaxed text-muted-foreground">
                Based in Ajmer, we deliver our sweets fresh to your doorstep across India. Each order is 
                prepared with care, packed with love, and delivered with a promise of quality 
                that we stand behind.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Thank you for being part of our journey. When you choose Laddoopedia, you are 
                not just buying sweets — you are supporting a tradition, a family, and a 
                commitment to authenticity.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
