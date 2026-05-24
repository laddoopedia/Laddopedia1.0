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
    id: 'LP001',
    name: 'Besan Laddoo',
    description: 'Traditional besan laddoo made with pure desi ghee and cardamom',
    price: 450,
    image: '/images/besan-laddoo.jpg',
    category: 'Classic',
    tags: ['Bestseller'],
  },
  {
    id: 'LP049',
    name: 'Walnut Brownie',
    description: 'Pack of 4 | Freshly Baked Brownies using Finest Ingredients',
    price: 249,
    image: '/images/Chocolate%20Brownie.jpeg',
    category: 'Brownie',
  },
  {
    id: 'LP006',
    name: 'Til Laddoo',
    description: 'Sesame seed laddoo with jaggery, perfect for winters',
    price: 350,
    image: '/images/til-laddoo.jpg',
    category: 'Classic',
  },
  {
    id: 'LP007',
    name: 'Churma Laddoo',
    description: 'Rajasthani specialty made with wheat flour and desi ghee',
    price: 480,
    image: '/images/churma-laddoo.jpg',
    category: 'Classic',
    tags: ['Bestseller'],
  },
  {
    id: 'LP009',
    name: 'Aata Laddoo',
    description: 'Whole wheat laddoo with jaggery and nuts',
    price: 390,
    image: '/images/aata-laddoo.jpg',
    category: 'Classic',
  },
  // Dry Fruit Laddoos
  {
    id: 'LP011',
    name: 'Dry Fruit Laddoo',
    description: 'Premium mix of almonds, cashews, pistachios and dates',
    price: 650,
    image: '/images/dryfruit-laddoo.jpg',
    category: 'Classic',
    tags: ['Bestseller'],
  },
  {
    id: 'LP012',
    name: 'Badam Laddoo',
    description: 'Pure almond laddoo with saffron and cardamom',
    price: 700,
    image: '/images/badam-laddoo.jpg',
    category: 'Classic',
  },
  {
    id: 'LP016',
    name: 'Mixed Nut Laddoo',
    description: 'Assorted nuts with dates and honey',
    price: 620,
    image: '/images/mixednut-laddoo.jpg',
    category: 'Classic',
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
  {
    id: 'LP017',
    name: 'Sugar-Free Besan Laddoo',
    description: 'Besan laddoo sweetened with stevia, diabetic-friendly',
    price: 520,
    image: '/images/sf-besan-laddoo.jpg',
    category: 'Sugar-Free',
    tags: ['Sugar-Free'],
    nutrition: {
      calories: 160,
      protein: '5g',
      carbs: '10g',
      fat: '9g',
      fiber: '2g',
      ingredients: ['Besan', 'Ghee', 'Stevia', 'Cardamom', 'Almonds'],
    },
  },
  {
    id: 'LP018',
    name: 'Sugar-Free Dry Fruit Laddoo',
    description: 'All-natural dry fruit laddoo with dates as sweetener',
    price: 680,
    image: '/images/sf-dryfruit-laddoo.jpg',
    category: 'Sugar-Free',
    tags: ['Sugar-Free', 'Bestseller'],
  },
  {
    id: 'LP021',
    name: 'Sugar-Free Ragi Laddoo',
    description: 'Finger millet laddoo with jaggery and almonds',
    price: 420,
    image: '/images/sf-ragi-laddoo.jpg',
    category: 'Sugar-Free',
    tags: ['Sugar-Free'],
  },
  {
    id: 'LP022',
    name: 'Sugar-Free Protein Laddoo',
    description: 'High-protein laddoo with nuts and seeds',
    price: 550,
    image: '/images/sf-protein-laddoo.jpg',
    category: 'Sugar-Free',
    tags: ['Sugar-Free'],
  },
  {
    id: 'LP023',
    name: 'Sugar-Free Sesame Laddoo',
    description: 'Til laddoo with jaggery, perfect for health-conscious',
    price: 400,
    image: '/images/sf-sesame-laddoo.jpg',
    category: 'Sugar-Free',
    tags: ['Sugar-Free'],
  },
  {
    id: 'LP024',
    name: 'Sugar-Free Almond Laddoo',
    description: 'Pure almond with date paste sweetener',
    price: 720,
    image: '/images/sf-almond-laddoo.jpg',
    category: 'Sugar-Free',
    tags: ['Sugar-Free'],
  },

  // Health Drinks
  {
    id: 'LP033',
    name: 'Chocolate Protein Drink',
    description: 'Rich chocolate protein drink mix for energy and strength',
    price: 450,
    image: '/images/choco-protein.jpg',
    category: 'Health Drinks',
    tags: ['Bestseller'],
  },
  {
    id: 'LP034',
    name: 'Vanilla Protein Drink',
    description: 'Smooth vanilla protein drink mix for daily nutrition',
    price: 450,
    image: '/images/vanilla-protein.jpg',
    category: 'Health Drinks',
  },

  // Muffins
  {
    id: 'LP035',
    name: 'Vanilla Muffin',
    description: 'Soft and fluffy vanilla muffin, freshly baked',
    price: 60,
    image: '/images/vanilla-muffin.jpg',
    category: 'Muffins',
  },
  {
    id: 'LP036',
    name: 'Chocolate Muffin',
    description: 'FREE DELIVERY ON ORDERS ABOVE @399 Oven Fresh Muffins Pack of 6',
    price: 199,
    image: '/images/Chocolate%20Muffins.jpeg',
    category: 'Muffins',
    tags: ['Bestseller'],
  },
  {
    id: 'LP037',
    name: 'Tutti Frutti Muffin',
    description: 'Colorful tutti frutti muffin, kids favorite',
    price: 65,
    image: '/images/tuttifrutti-muffin.jpg',
    category: 'Muffins',
  },
  {
    id: 'LP038',
    name: 'Choco Chips Muffin',
    description: 'Vanilla muffin loaded with chocolate chips',
    price: 75,
    image: '/images/chocochips-muffin.jpg',
    category: 'Muffins',
  },
  {
    id: 'LP039',
    name: 'Ragi Muffin',
    description: 'Healthy ragi muffin with natural sweetness',
    price: 80,
    image: '/images/ragi-muffin.jpg',
    category: 'Muffins',
    tags: ['Sugar-Free'],
  },
]

export const categories =
  ['All', 'Classic', 'Sugar-Free', 'Health Drinks', 'Muffins', 'Brownie'] as const

export type Category = (typeof categories)[number]

