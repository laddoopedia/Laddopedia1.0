'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MessageCircle, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import type { Product } from '@/lib/products'

interface ProductDetailModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

export function ProductDetailModal({ product, isOpen, onClose }: ProductDetailModalProps) {
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null)
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919999999999'

  if (!product) return null

  const hasVariants = product.variants && product.variants.length > 0
  const currentPrice = selectedVariant
    ? product.variants?.find((v) => v.size === selectedVariant)?.price || product.price
    : product.price

  const handleOrderClick = () => {
    const sizeInfo = selectedVariant ? `\nSize: ${selectedVariant}` : ''
    const message = encodeURIComponent(
      `Hi, I want to order:\n\nProduct: ${product.name}\nProduct ID: ${product.id}${sizeInfo}\nPrice: ₹${currentPrice}\n\nPlease confirm availability and share delivery details.`
    )
    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="space-y-4">
          {/* Header with close button */}
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-bold text-foreground">{product.name}</h2>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Image */}
          <div className="relative w-full aspect-square overflow-hidden rounded-lg bg-muted">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 500px"
            />
            {product.tags && product.tags.length > 0 && (
              <div className="absolute left-3 top-3 flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-full px-3 py-1 text-sm font-semibold ${
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

          {/* Description */}
          <div>
            <h3 className="font-semibold text-foreground mb-2">Description</h3>
            <p className="text-muted-foreground">{product.description}</p>
            {product.category === 'Muffins' && (
              <p className="mt-2 text-sm font-semibold text-amber-600">
                Delivery charges extra for muffin orders.
              </p>
            )}
          </div>

          {/* Variants/Sizes */}
          {hasVariants && product.variants && (
            <div>
              <h3 className="font-semibold text-foreground mb-3">Select Size</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant.size}
                    onClick={() => setSelectedVariant(variant.size)}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      selectedVariant === variant.size
                        ? 'border-primary bg-primary/10'
                        : 'border-muted hover:border-primary/50'
                    }`}
                  >
                    <div className="font-semibold text-sm">{variant.size}</div>
                    <div className="text-primary font-bold">₹{variant.price}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Price */}
          {!hasVariants && (
            <div className="p-4 bg-muted rounded-lg">
              <div className="text-sm text-muted-foreground mb-1">Price</div>
              <div className="text-3xl font-bold text-primary">₹{product.price}</div>
            </div>
          )}

          {/* Nutritional Information */}
          {product.nutrition && (
            <div>
              <h3 className="font-semibold text-foreground mb-3">Nutritional Information</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3 bg-muted rounded-lg">
                  <div className="text-xs text-muted-foreground">Calories</div>
                  <div className="text-lg font-bold text-foreground">
                    {product.nutrition.calories}
                  </div>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <div className="text-xs text-muted-foreground">Protein</div>
                  <div className="text-lg font-bold text-foreground">
                    {product.nutrition.protein}
                  </div>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <div className="text-xs text-muted-foreground">Carbs</div>
                  <div className="text-lg font-bold text-foreground">
                    {product.nutrition.carbs}
                  </div>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <div className="text-xs text-muted-foreground">Fat</div>
                  <div className="text-lg font-bold text-foreground">
                    {product.nutrition.fat}
                  </div>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <div className="text-xs text-muted-foreground">Fiber</div>
                  <div className="text-lg font-bold text-foreground">
                    {product.nutrition.fiber}
                  </div>
                </div>
              </div>

              {/* Ingredients */}
              <div className="mt-4">
                <h4 className="font-semibold text-foreground mb-2">Ingredients</h4>
                <div className="flex flex-wrap gap-2">
                  {product.nutrition.ingredients.map((ingredient, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm bg-muted rounded-full text-foreground"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Product ID */}
          <div className="text-xs text-muted-foreground">Product ID: {product.id}</div>

          {/* Current Price Display and Order Button */}
          <div className="space-y-3 pt-4 border-t">
            {hasVariants && selectedVariant && (
              <div className="p-4 bg-primary/10 rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Selected Price</div>
                <div className="text-3xl font-bold text-primary">₹{currentPrice}</div>
              </div>
            )}
            <Button
              onClick={handleOrderClick}
              disabled={hasVariants && !selectedVariant}
              className="w-full gap-2 bg-[#25D366] text-white hover:bg-[#128C7E] h-12"
              size="lg"
            >
              <MessageCircle className="h-5 w-5" />
              Order on WhatsApp
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
