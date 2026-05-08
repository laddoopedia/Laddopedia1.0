'use client'

import { useState } from 'react'
import { products, categories, type Category, type Product } from '@/lib/products'
import { ProductCard } from '@/components/product-card'
import { ProductDetailModal } from '@/components/product-detail-modal'
import { Button } from '@/components/ui/button'

export function ProductSection() {
  const [activeCategory, setActiveCategory] = useState<Category>('All')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const filteredProducts =
    activeCategory === 'All'
      ? products
      : products.filter((product) => product.category === activeCategory)

  return (
    <section id="products" className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
            Our Products
          </h2>
          <p className="mt-3 text-muted-foreground">
            Handcrafted with love, made fresh for every order
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              onClick={() => setActiveCategory(category)}
              className="min-w-[80px]"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product}
              onProductClick={setSelectedProduct}
            />
          ))}
        </div>

        {/* Results Count */}
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Showing {filteredProducts.length} of {products.length} products
        </p>
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={selectedProduct !== null}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  )
}
