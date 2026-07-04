import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { TrustBar } from '@/components/trust-bar'
import { InfoStrip } from '@/components/info-strip'
import { ProductSection } from '@/components/product-section'
import { AboutPreview } from '@/components/about-preview'
import { Testimonials } from '@/components/testimonials'
import { Footer } from '@/components/footer'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <InfoStrip />
        <TrustBar />
        <ProductSection />
        <Testimonials />
        <AboutPreview />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
