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
  category: 'Classic' | 'Health Drinks' | 'Muffins' | 'Brownie' | 'Cookies'
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
    image: '/images/WalnutBrownie.jpeg',
    category: 'Brownie',
  },
  {
    id: 'LP040',
    name: 'Summer Special Laddu',
    description:
      '300-325gm | Dryfruits, sattu, muskmelon & watermelon seeds, dhaga mishti, white pepper, desi ghee, elaichi & coconut powder',
    price: 360,
    image: '/images/SummerSpecialLaddu.jpeg',
    category: 'Classic',
  },
  {
    id: 'LP041',
    name: 'Gond Aata Dryfruits Laddu',
    description:
      '300 - 325 gm | Ingredients: Gond, Desi Ghee, Jaggery, Wheat flour, Dryfruits, Elaichi powder',
    price: 360,
    image: '/images/GondAataDryfruitsLaddu.jpeg',
    category: 'Classic',
  },
  {
    id: 'LP042',
    name: 'High Protein Seeds Laddu',
    description:
      '300 - 325 gm | Ingredients: Assorted Seeds, Anjeer, Dates, Desi Ghee, Almonds',
    price: 360,
    image: '/images/HighProteinSeedsLaddu.jpeg',
    category: 'Classic',
  },
  {
    id: 'LP043',
    name: 'Assorted Laddu Box',
    description: '300 - 325 gm',
    price: 360,
    image: '/images/AssortedLadduBox.jpeg',
    category: 'Classic',
  },
  {
    id: 'LP044',
    name: 'Almond Laddu',
    description:
      '300 - 325 gm | Ingredients: High quality Almonds Sweetened with Dates and Raisin, Desi Ghee, Elaichi powder',
    price: 360,
    image: '/images/AlmondLaddu.jpeg',
    category: 'Classic',
  },
  {
    id: 'LP045',
    name: 'Nutritious Raagi Laddu for Kids',
    description:
      '300 - 325 gm | Ingredients: Raagi flour, Dryfruits, Desi Ghee, Jaggery, White Sesame seeds',
    price: 360,
    image: '/images/NutritiousRaagiLaddufor_Kids.jpeg',
    category: 'Classic',
  },
  {
    id: 'LP046',
    name: 'Special Doodh Laddu',
    description:
      '300 - 325 gm | Ingredients: Freshly Prepared Bundi in Desi Ghee, Blended with Milk, Dryfruits, Brown Sugar, Elaichi Powder, Muskmelon seeds',
    price: 300,
    image: '/images/SpecialDoodhLaddu.jpeg',
    category: 'Classic',
  },
  {
    id: 'LP047',
    name: 'Anjeer Dryfruits Laddu',
    description:
      '300 - 325 gm | Ingredients: Finest Quality Anjeer, Desi Ghee, Dates, Assorted Dryfruits',
    price: 699,
    image: '/images/AnjeerDryfruitsLaddu.jpeg',
    category: 'Classic',
  },

  // Health Drinks
  {
    id: 'HD001',
    name: 'Rich Protein Powder For Moms & Dads',
    description:
      '500gm | Rich in Protein with Goodness Of Sattu, Dryfruits, Assorted Seeds, Jaggery, Cardamom, Oats and essential Herbs.',
    price: 749,
    image: '/images/RichProteinPowderForMoms&Dads.jpg',
    category: 'Health Drinks',
    tags: ['Bestseller'],
  },
  {
    id: 'HD002',
    name: 'High Nutrition Kids Health Drink',
    description:
      '500gm | Goodness Of Ragi, Dryfruits Infused with Chocolate Powder and Jaggery with High Nutritional Values.',
    price: 699,
    image: '/images/HighNutritionKidsHealthDrink.jpg',
    category: 'Health Drinks',
  },

  // Muffins
  {
    id: 'MF001',
    name: 'Vanilla Tuty Fruity Muffins',
    description: 'FREE DELIVERY ON ORDERS ABOVE @399 | Oven Fresh Muffins Pack of 6',
    price: 150,
    image: '/images/VanillaTutyFruityMuffins.jpg',
    category: 'Muffins',
  },
  {
    id: 'MF002',
    name: 'Kids Delight Healthy Raagi Muffins',
    description: 'FREE DELIVERY ON ORDERS ABOVE @399 | Kids Special Raagi Muffins Pack of 6',
    price: 249,
    image: '/images/KidsDelightHealthyRaagiMuffins.jpg',
    category: 'Muffins',
  },

  // Existing items (kept last)
  {
    id: 'LP036',
    name: 'Chocolate Muffin',
    description: 'FREE DELIVERY ON ORDERS ABOVE @399 Oven Fresh Muffins Pack of 6',
    price: 199,
    image: '/images/ChocolateMuffins.jpeg',
    category: 'Muffins',
    tags: ['Bestseller'],
  },

  // Cookies
  {
    id: 'CK001',
    name: 'Jeera Cookies',
    description: 'Quantity: 300 gm | Authentic Jeera Cookies Made Using Wheat Flour',
    price: 199,
    image: '/images/JeeraCookies.jpeg',
    category: 'Cookies',
  },
  {
    id: 'CK002',
    name: 'Premium Butter Cookies',
    description: 'Quantity: 300 gm | Premium Butter Cookies Made Using Authentic Butter and Refined Wheat flour',
    price: 199,
    image: '/images/PremiumButterCookies.jpeg',
    category: 'Cookies',
  },
  {
    id: 'CK003',
    name: 'Real Mango Cookies',
    description: 'Quantity: 300 gm | Seasonal Mango Cookies Made Using Real Mango Pulp',
    price: 199,
    image: '/images/RealMangoCookies.jpeg',
    category: 'Cookies',
  },
]

export const categories =
  ['All', 'Classic', 'Health Drinks', 'Muffins', 'Brownie', 'Cookies'] as const

export type Category = (typeof categories)[number]

