'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'

const featuredTestimonials = [
  {
    name: 'Usha Sharma',
    quote: 'So delicious cookies. Thank you for coming in our society.',
  },
  {
    name: 'Poorti',
    quote: "Really it's very tasty. Mujhe bahut pasand aaye, aap log bhi try kar sakte hain.",
  },
  {
    name: 'Suman Gupta',
    quote: 'These cookies are absolutely delicious! Freshly baked, perfectly textured, and full of flavor.',
  },
]

const testimonialImages = [
  {
    src: 'https://res.cloudinary.com/duapqxu5/image/upload/v1783173180/Picsart_26-07-04_18-51-00-181_gxd3on.png',
    alt: 'WhatsApp feedback from Usha Sharma praising the cookies and walnut brownie',
  },
  {
    src: 'https://res.cloudinary.com/duapqxu5/image/upload/v1783173179/Picsart_26-07-04_18-50-25-952.jpg_qw82x7.jpg',
    alt: 'WhatsApp feedback from Poorti saying the muffin was very tasty',
  },
  {
    src: 'https://res.cloudinary.com/duapqxu5/image/upload/v1783173179/Picsart_26-07-04_18-49-57-810.jpg_rmookw.jpg',
    alt: 'WhatsApp feedback from Suman Gupta about freshly baked cookies',
  },
  {
    src: 'https://res.cloudinary.com/duapqxu5/image/upload/v1783173178/IMG-20260701-WA0010.jpg_ursmxs.jpg',
    alt: 'WhatsApp feedback from Mohita about delicious flavor',
  },
  {
    src: 'https://res.cloudinary.com/duapqxu5/image/upload/v1783173177/IMG-20260701-WA0009.jpg_irjvtw.jpg',
    alt: 'WhatsApp product card and feedback from Usha Sharma',
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeTestimonial = testimonialImages[activeIndex]

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % testimonialImages.length)
    }, 6000)

    return () => window.clearInterval(timer)
  }, [])

  const showPrevious = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? testimonialImages.length - 1 : currentIndex - 1
    )
  }

  const showNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % testimonialImages.length)
  }

  return (
    <section id="testimonials" className="bg-secondary py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex justify-center gap-1 text-primary" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="h-5 w-5 fill-current" />
            ))}
          </div>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
            Loved by Families
          </h2>
          <p className="mt-3 text-muted-foreground">
            Real messages from customers who ordered our fresh laddoos, cookies, muffins, and brownies.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-5xl gap-4 md:grid-cols-3">
          {featuredTestimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-lg border border-border bg-card p-4 shadow-sm"
            >
              <Quote className="h-6 w-6 text-primary" aria-hidden="true" />
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                “{testimonial.quote}”
              </p>
              <p className="mt-4 font-semibold text-foreground">{testimonial.name}</p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-4xl">
          <div className="relative overflow-hidden rounded-lg border border-border bg-card p-3 shadow-sm">
            <figure className="relative flex h-[340px] items-center justify-center sm:h-[430px]">
              <Image
                key={activeTestimonial.src}
                src={activeTestimonial.src}
                alt={activeTestimonial.alt}
                width={900}
                height={1200}
                className="h-full w-full rounded-md object-contain transition-opacity duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 760px"
                loading="lazy"
              />
            </figure>

            <button
              type="button"
              onClick={showPrevious}
              className="absolute left-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-foreground shadow-sm transition hover:bg-background"
              aria-label="Show previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={showNext}
              className="absolute right-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-foreground shadow-sm transition hover:bg-background"
              aria-label="Show next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-4 flex justify-center gap-2">
            {testimonialImages.map((testimonial, index) => (
              <button
                key={testimonial.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeIndex ? 'w-8 bg-primary' : 'w-2.5 bg-primary/30'
                }`}
                aria-label={`Show testimonial ${index + 1}`}
                aria-current={index === activeIndex ? 'true' : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
