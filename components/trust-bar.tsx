import { Leaf, Truck, Heart, ChefHat } from 'lucide-react'

const trustPoints = [
  {
    icon: Leaf,
    title: 'Made with Desi Ghee',
    description: 'Pure & authentic',
  },
  {
    icon: Truck,
    title: 'Pan India Delivery',
    description: 'Shipped anywhere in India',
  },
  {
    icon: Heart,
    title: 'Sugar-Free Options Available',
    description: 'For healthier choices',
  },
  {
    icon: ChefHat,
    title: 'Freshly Made to Order',
    description: 'No preservatives',
  },
]

export function TrustBar() {
  return (
    <section className="border-y border-border bg-card py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {trustPoints.map((point) => (
            <div key={point.title} className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <point.icon className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="mt-3 text-sm font-semibold text-foreground sm:text-base">
                {point.title}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
