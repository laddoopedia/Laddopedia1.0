'use client'

import Image from 'next/image'
import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import type { Product } from '@/lib/products'

interface ProductCardProps {
  product: Product
  onProductClick: (product: Product) => void
}

export function ProductCard({ product, onProductClick }: ProductCardProps) {
  return (
    <Card 
      className="group overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer"
      onClick={() => onProductClick(product)}
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          loading="lazy"
        />
        {product.tags && product.tags.length > 0 && (
          <div className="absolute left-2 top-2 flex flex-wrap gap-1">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className={`rounded-full px-2 py-1 text-xs font-semibold ${
                  tag === 'Bestseller'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-accent text-accent-foreground'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="font-semibold text-foreground">{product.name}</h3>
          <span className="whitespace-nowrap font-bold text-primary">
            ₹{product.price}
            {product.variants && product.variants.length > 0 && (
              <span className="text-xs font-normal text-muted-foreground ml-1">+</span>
            )}
          </span>
        </div>
        <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
          {product.description}
        </p>
        <div className="mb-3 text-xs text-muted-foreground">
          ID: {product.id}
        </div>
        <Button
          onClick={(e) => {
            e.stopPropagation()
            onProductClick(product)
          }}
          className="w-full gap-2 bg-[#25D366] text-white hover:bg-[#128C7E]"
          size="sm"
        >
          <MessageCircle className="h-4 w-4" />
          View Details
        </Button>
      </CardContent>
    </Card>
  )
}
