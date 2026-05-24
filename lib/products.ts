export type ProductVariant = {
  size: string
  price: number
}

export type Nutrition = {
  calories: number
  protein: string
  carbs: string
  fat: string
  fiber: string
  ingredients: string[]
}

export type Product = {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: 'Classic' | 'Sugar-Free' | 'Health Drinks' | 'Muffins' | 'Brownie'
  tags?: ('Bestseller' | 'Sugar-Free')[]
  variants?: ProductVariant[]
  nutrition?: Nutrition
}

export const products: Product[] = [
  // Classic Laddoos

  {
    id: 'LP049',
    name: 'Walnut Brownie',
    description: 'Pack of 4 | Freshly Baked Brownies using Finest Ingredients',
    price: 249,
    image: '/images/Chocolate%20Brownie.jpeg',
    category: 'Brownie',
  },
  {
    id: 'LP040',
    name: 'Summer Special Laddu',
    description:
      '300-325gm | Dryfruits, sattu, muskmelon & watermelon seeds, dhaga mishti, white pepper, desi ghee, elaichi & coconut powder',
    price: 360,
    image: '/images/summer-special-laddu.jpg',
    category: 'Classic',
  },
  {
    id: 'LP041',
    name: 'Gond Aata Dryfruits Laddu',
    description:
      '300 - 325 gm | Ingredients: Gond, Desi Ghee, Jaggery, Wheat flour, Dryfruits, Elaichi powder',
    price: 360,
    image: '/images/gond-aata-dryfruits-laddu.jpg',
    category: 'Classic',
  },
  {
    id: 'LP042',
    name: 'High Protein Seeds Laddu',
    description:
      '300 - 325 gm | Ingredients: Assorted Seeds, Anjeer, Dates, Desi Ghee, Almonds',
    price: 360,
    image: '/images/high-protein-seeds-laddu.jpg',
    category: 'Classic',
  },
  {
    id: 'LP043',
    name: 'Assorted Laddu Box',
    description: '300 - 325 gm',
    price: 360,
    image: '/images/assorted-laddu-box.jpg',
    category: 'Classic',
  },
  {
    id: 'LP044',
    name: 'Almond Laddu',
    description:
      '300 - 325 gm | Ingredients: High quality Almonds Sweetened with Dates and Raisin, Desi Ghee, Elaichi powder',
    price: 360,
    image: '/images/almond-laddu.jpg',
    category: 'Classic',
  },
  {
    id: 'LP045',
    name: 'Nutritious Raagi Laddu for Kids',
    description:
      '300 - 325 gm | Ingredients: Raagi flour, Dryfruits, Desi Ghee, Jaggery, White Sesame seeds',
    price: 360,
    image: '/images/nutritious-raagi-laddu-kids.jpg',
    category: 'Classic',
  },
  {
    id: 'LP046',
    name: 'Special Doodh Laddu',
    description:
      '300 - 325 gm | Ingredients: Freshly Prepared Bundi in Desi Ghee, Blended with Milk, Dryfruits, Brown Sugar, Elaichi Powder, Muskmelon seeds',
    price: 300,
    image: '/images/special-doodh-laddu.jpg',
    category: 'Classic',
  },
  {
    id: 'LP047',
    name: 'Anjeer Dryfruits Laddu',
    description:
      '300 - 325 gm | Ingredients: Finest Quality Anjeer, Desi Ghee, Dates, Assorted Dryfruits',
    price: 699,
    image: '/images/anjeer-laddoo.jpg',
    category: 'Classic',
  },

  // Sugar-Free Options







  // Health Drinks



  // Muffins

  {
    id: 'LP036',
    name: 'Chocolate Muffin',
    description: 'FREE DELIVERY ON ORDERS ABOVE @399 Oven Fresh Muffins Pack of 6',
    price: 199,
    image: '/images/Chocolate%20Muffins.jpeg',
    category: 'Muffins',
    tags: ['Bestseller'],
  },



]

export const categories =
  ['All', 'Classic', 'Sugar-Free', 'Health Drinks', 'Muffins', 'Brownie'] as const

export type Category = (typeof categories)[number]

