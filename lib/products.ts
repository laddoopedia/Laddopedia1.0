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
  category:  'Sugar-Free' | 'Health Drinks' | 'Muffins'
  tags?: ('Bestseller' | 'Sugar-Free')[]
  variants?: ProductVariant[]
  nutrition?: Nutrition
}

export const products: Product[] = [
   
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
  }
  {
    id: 'LP018',
    name: 'Sugar-Free Dry Fruit Laddoo',
    description: 'All-natural dry fruit laddoo with dates as sweetener',
    price: 680,
    image: '/images/sf-dryfruit-laddoo.jpg',
    category: 'Sugar-Free',
    tags: ['Sugar-Free', 'Bestseller'],
    nutrition: {
      calories: 200,
      protein: '8g',
      carbs: '18g',
      fat: '12g',
      fiber: '4g',
      ingredients: ['Dry Fruits', 'Dates', 'Almonds', 'Ghee', 'Honey'],
    },
  }
  {
    id: 'LP021',
    name: 'Sugar-Free Ragi Laddoo',
    description: 'Finger millet laddoo with jaggery and almonds',
    price: 420,
    image: '/images/sf-ragi-laddoo.jpg',
    category: 'Sugar-Free',
    tags: ['Sugar-Free'],
    nutrition: {
      calories: 165,
      protein: '6g',
      carbs: '14g',
      fat: '8g',
      fiber: '4g',
      ingredients: ['Ragi (Finger Millet)', 'Almonds', 'Jaggery', 'Ghee'],
    },
  }
  {
    id: 'LP022',
    name: 'Sugar-Free Protein Laddoo',
    description: 'High-protein laddoo with nuts and seeds',
    price: 550,
    image: '/images/sf-protein-laddoo.jpg',
    category: 'Sugar-Free',
    tags: ['Sugar-Free'],
    nutrition: {
      calories: 195,
      protein: '12g',
      carbs: '12g',
      fat: '11g',
      fiber: '4g',
      ingredients: ['Whey Protein', 'Mixed Nuts', 'Seeds', 'Ghee', 'Honey'],
    },
  }
  {
    id: 'LP023',
    name: 'Sugar-Free Sesame Laddoo',
    description: 'Til laddoo with jaggery, perfect for health-conscious',
    price: 400,
    image: '/images/sf-sesame-laddoo.jpg',
    category: 'Sugar-Free',
    tags: ['Sugar-Free'],
    nutrition: {
      calories: 185,
      protein: '6g',
      carbs: '12g',
      fat: '12g',
      fiber: '4g',
      ingredients: ['Sesame Seeds', 'Jaggery', 'Ghee', 'Ginger'],
    },
  }
  {
    id: 'LP024',
    name: 'Sugar-Free Almond Laddoo',
    description: 'Pure almond with date paste sweetener',
    price: 720,
    image: '/images/sf-almond-laddoo.jpg',
    category: 'Sugar-Free',
    tags: ['Sugar-Free'],
    nutrition: {
      calories: 215,
      protein: '9g',
      carbs: '14g',
      fat: '15g',
      fiber: '4g',
      ingredients: ['Almonds', 'Dates', 'Ghee', 'Cardamom'],
    },
  }
  // Health Drinks
  {
    id: 'LP033',
    name: 'Chocolate Protein Drink',
    description: 'Rich chocolate protein drink mix for energy and strength',
    price: 450,
    image: '/images/choco-protein.jpg',
    category: 'Health Drinks',
    tags: ['Bestseller'],
    nutrition: {
      calories: 120,
      protein: '15g',
      carbs: '12g',
      fat: '2g',
      fiber: '2g',
      ingredients: ['Whey Protein', 'Cocoa', 'Milk Powder', 'Sugar', 'Minerals'],
    },
  }
  {
    id: 'LP034',
    name: 'Vanilla Protein Drink',
    description: 'Smooth vanilla protein drink mix for daily nutrition',
    price: 450,
    image: '/images/vanilla-protein.jpg',
    category: 'Health Drinks',
    nutrition: {
      calories: 120,
      protein: '15g',
      carbs: '12g',
      fat: '2g',
      fiber: '2g',
      ingredients: ['Whey Protein', 'Vanilla Extract', 'Milk Powder', 'Sugar'],
    },
  }
  {
    id: 'LP046',
    name: 'Protein Powder for Kids',
    description: 'Nutritious protein powder formulated for children, with a tasty flavor',
    price: 570,
    image: '/images/protein-kids.jpg',
    category: 'Health Drinks',
    variants: [
      { size: '480 gm', price: 570 },
      { size: '900 gm', price: 1000 },
    ],
    nutrition: {
      calories: 110,
      protein: '12g',
      carbs: '10g',
      fat: '3g',
      fiber: '1g',
      ingredients: ['Whey Protein', 'Milk Solids', 'Natural Flavors', 'Vitamins', 'Minerals'],
    },
  }
  {
    id: 'LP047',
    name: 'Protein Powder for Women',
    description: 'Protein powder blend designed for women with balanced nutrition',
    price: 649,
    image: '/images/protein-women.jpg',
    category: 'Health Drinks',
    variants: [
      { size: '480 gm', price: 649 },
      { size: '1 kg', price: 1099 },
    ],
    nutrition: {
      calories: 115,
      protein: '14g',
      carbs: '11g',
      fat: '3g',
      fiber: '1g',
      ingredients: ['Whey Protein', 'Soy Protein', 'Vitamins', 'Calcium', 'Natural Flavors'],
    },
  }
  // Muffins
  {
    id: 'LP035',
    name: 'Vanilla Muffin',
    description: 'Soft and fluffy vanilla muffin, freshly baked',
    price: 60,
    image: '/images/vanilla-muffin.jpg',
    category: 'Muffins',
    nutrition: {
      calories: 220,
      protein: '3g',
      carbs: '28g',
      fat: '10g',
      fiber: '1g',
      ingredients: ['Flour', 'Milk', 'Vanilla Extract', 'Butter', 'Sugar'],
    },
  }
  {
    id: 'LP036',
    name: 'Chocolate Muffin',
    description: 'Rich chocolate muffin with a moist center',
    price: 70,
    image: '/images/chocolate-muffin.jpg',
    category: 'Muffins',
    tags: ['Bestseller'],
    nutrition: {
      calories: 240,
      protein: '3g',
      carbs: '30g',
      fat: '12g',
      fiber: '2g',
      ingredients: ['Flour', 'Cocoa Powder', 'Eggs', 'Milk', 'Butter', 'Sugar'],
    },
  }
  {
    id: 'LP037',
    name: 'Tutti Frutti Muffin',
    description: 'Colorful tutti frutti muffin, kids favorite',
    price: 65,
    image: '/images/tuttifrutti-muffin.jpg',
    category: 'Muffins',
    nutrition: {
      calories: 230,
      protein: '3g',
      carbs: '29g',
      fat: '11g',
      fiber: '1g',
      ingredients: ['Flour', 'Dry Fruits', 'Milk', 'Butter', 'Sugar'],
    },
  }
  {
    id: 'LP038',
    name: 'Choco Chips Muffin',
    description: 'Vanilla muffin loaded with chocolate chips',
    price: 75,
    image: '/images/chocochips-muffin.jpg',
    category: 'Muffins',
    nutrition: {
      calories: 250,
      protein: '3g',
      carbs: '31g',
      fat: '13g',
      fiber: '1g',
      ingredients: ['Flour', 'Chocolate Chips', 'Milk', 'Butter', 'Sugar'],
    },
  }
  {
    id: 'LP039',
    name: 'Ragi Muffin',
    description: 'Healthy ragi muffin with natural sweetness',
    price: 80,
    image: '/images/ragi-muffin.jpg',
    category: 'Muffins',
    tags: ['Sugar-Free'],
    nutrition: {
      calories: 210,
      protein: '5g',
      carbs: '26g',
      fat: '9g',
      fiber: '4g',
      ingredients: ['Ragi Flour', 'Milk', 'Honey', 'Ghee'],
    },
  }
  {
    id: 'LP048',
    name: 'Vanilla Muffins Pack of 6',
    description: 'Pack of 6 vanilla muffins. Delivery charges extra.',
    price: 99,
    image: '/images/vanilla-muffins-pack.jpg',
    category: 'Muffins',
    nutrition: {
      calories: 1260,
      protein: '18g',
      carbs: '168g',
      fat: '60g',
      fiber: '6g',
      ingredients: ['Flour', 'Milk', 'Vanilla Extract', 'Butter', 'Sugar'],
    },
  }
  {
    id: 'LP049',
    name: 'Chocolate Muffins Pack of 6',
    description: 'Pack of 6 chocolate muffins. Delivery charges extra.',
    price: 129,
    image: '/images/chocolate-muffins-pack.jpg',
    category: 'Muffins',
    nutrition: {
      calories: 1440,
      protein: '18g',
      carbs: '180g',
      fat: '72g',
      fiber: '6g',
      ingredients: ['Flour', 'Cocoa Powder', 'Milk', 'Butter', 'Sugar'],
    },
  }
  {
    id: 'LP050',
    name: 'Choco Chips Muffins Pack of 6',
    description: 'Pack of 6 chocochip muffins. Delivery charges extra.',
    price: 139,
    image: '/images/chocochips-muffins-pack.jpg',
    category: 'Muffins',
    nutrition: {
      calories: 1500,
      protein: '18g',
      carbs: '185g',
      fat: '75g',
      fiber: '6g',
      ingredients: ['Flour', 'Chocolate Chips', 'Eggs', 'Butter', 'Sugar'],
    },
  }
  // New Specialty Laddoos
  {
    id: 'LP040',
    name: 'Aata Gond Laddoo',
    description: 'Whole wheat and gond laddoo with nutritional goodness',
    price: 299,
    image: '/images/aata-gond-laddoo.jpg',
    category: 'Classic',
    variants: [
      { size: '250 gm', price: 299 },
      { size: '500 gm', price: 499 },
      { size: '1 kg', price: 899 },
    ],
    nutrition: {
      calories: 175,
      protein: '6g',
      carbs: '20g',
      fat: '8g',
      fiber: '3g',
      ingredients: ['Whole Wheat', 'Gond (Gum Arabic)', 'Jaggery', 'Ghee', 'Dry Fruits'],
    },
  }
  {
    id: 'LP041',
    name: 'Nutritious Raagi Laddoo',
    description: 'Finger millet laddoo packed with nutritional benefits',
    price: 299,
    image: '/images/raagi-laddoo.jpg',
    category: 'Classic',
    variants: [
      { size: '250 gm', price: 299 },
      { size: '500 gm', price: 549 },
      { size: '1 kg', price: 949 },
    ],
    nutrition: {
      calories: 168,
      protein: '7g',
      carbs: '18g',
      fat: '8g',
      fiber: '4g',
      ingredients: ['Ragi (Finger Millet)', 'Jaggery', 'Almonds', 'Ghee', 'Cardamom'],
    },
  }
  {
    id: 'LP042',
    name: 'Special Doodh Ghee Laddoo',
    description: 'Creamy milk and ghee laddoo with traditional recipe',
    price: 249,
    image: '/images/doodh-ghee-laddoo.jpg',
    category: 'Classic',
    variants: [
      { size: '250 gm', price: 249 },
      { size: '500 gm', price: 499 },
      { size: '1 kg', price: 899 },
    ],
    nutrition: {
      calories: 182,
      protein: '4g',
      carbs: '21g',
      fat: '9g',
      fiber: '1g',
      ingredients: ['Milk Powder', 'Desi Ghee', 'Jaggery', 'Dry Fruits', 'Cardamom'],
    },
  }
  {
    id: 'LP043',
    name: 'Almond Laddoo',
    description: 'Pure almond laddoo with saffron and cardamom',
    price: 399,
    image: '/images/almond-laddoo.jpg',
    category: 'Classic',
    variants: [
      { size: '250 gm', price: 399 },
      { size: '500 gm', price: 699 },
    ],
    nutrition: {
      calories: 215,
      protein: '8g',
      carbs: '14g',
      fat: '15g',
      fiber: '3g',
      ingredients: ['Almonds', 'Saffron', 'Cardamom', 'Ghee', 'Honey'],
    },
  }
  {
    id: 'LP044',
    name: 'Seeds Laddoo',
    description: 'Mixed seeds laddoo with natural goodness',
    price: 299,
    image: '/images/seeds-laddoo.jpg',
    category: 'Classic',
    variants: [
      { size: '250 gm', price: 299 },
      { size: '500 gm', price: 499 },
    ],
    nutrition: {
      calories: 195,
      protein: '8g',
      carbs: '15g',
      fat: '13g',
      fiber: '5g',
      ingredients: ['Sunflower Seeds', 'Sesame Seeds', 'Pumpkin Seeds', 'Jaggery', 'Ghee'],
    },
  }
  {
    id: 'LP045',
    name: 'Anjeer Dryfruit Laddoo',
    description: 'Premium fig and mixed dry fruits laddoo',
    price: 699,
    image: '/images/anjeer-dryfruit-laddoo.jpg',
    category: 'Classic',
    tags: ['Bestseller'],
    variants: [
      { size: '250 gm', price: 699 },
      { size: '500 gm', price: 1199 },
    ],
    nutrition: {
      calories: 225,
      protein: '7g',
      carbs: '22g',
      fat: '12g',
      fiber: '4g',
      ingredients: ['Figs (Anjeer)', 'Dates', 'Almonds', 'Cashews', 'Ghee', 'Honey'],
    },
  },
]

export const categories = ['All', 'Sugar-Free', 'Health Drinks', 'Muffins'] as const
export type Category = (typeof categories)[number]
