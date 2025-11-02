import kitchenOneSpecial from '../assets/images/Kitchen One Special.jpeg';
import allMeat from '../assets/images/All-meat.jpeg';
import cheese from '../assets/images/Cheese.jpeg';
import hawaiian from '../assets/images/Hawaiian.jpeg';
import pepperoniHam from '../assets/images/Pepperoni and Ham.jpeg';
import alohaChickenBBQ from '../assets/images/Aloha Chicken BBQ.jpeg';
import creamyChickenPasta from '../assets/images/Creamy Chicken and Ham Pasta.jpeg';
import orientalSpicyPasta from '../assets/images/Oriental Spicy Chicken Pasta.jpeg';
import tunaPasta from '../assets/images/Tuna Pasta in Fresh Tomatoes and Basil.jpeg';
import potatoWedges from '../assets/images/Potato Wedges.jpeg';

export const products = [
  {
    id: 1,
    name: "Kitchen One Special",
    price: 480.00,
    category: "Pizza",
    manufacturer: "Kitchen One",
    reviewWebhookUrl: "", // Add your Google Apps Script URL for reviews
    googleSheetId: "", // Add your Google Sheet ID
    logo: kitchenOneSpecial,
    label: kitchenOneSpecial,
    productImages: [
      kitchenOneSpecial
    ],
    sizes: [
      { label: 'Small (10")', price: 270.00 },
      { label: 'Medium (14")', price: 480.00 },
      { label: 'Large (18")', price: 860.00 }
    ],
    crustTypes: [
      { label: 'Regular' },
      { label: 'Thin' },
      { label: 'Superthin' }
    ],
    sliceTypes: [
      { label: '8 Regular Cut' },
      { label: '16 Regular Cut' },
      { label: '32 Square Cut' }
    ],
    description: "Our signature pizza with cheese, pepperoni, ham, bacon bits, ground pork, green & red bell peppers, onion, mushroom, pineapple and black olives. A perfect combination of meats and vegetables that delivers an explosion of flavors in every bite."
  },
  {
    id: 2,
    name: "All-Meat Pizza",
    price: 390.00,
    category: "Pizza",
    manufacturer: "Kitchen One",
    reviewWebhookUrl: "",
    googleSheetId: "",
    logo: allMeat,
    label: allMeat,
    productImages: [
      allMeat
    ],
    sizes: [
      { label: 'Small (10")', price: 220.00 },
      { label: 'Medium (14")', price: 390.00 },
      { label: 'Large (18")', price: 670.00 }
    ],
    crustTypes: [
      { label: 'Regular' },
      { label: 'Thin' },
      { label: 'Superthin' }
    ],
    sliceTypes: [
      { label: '8 Regular Cut' },
      { label: '16 Regular Cut' },
      { label: '32 Square Cut' }
    ],
    description: "A meat lover's dream! Loaded with cheese, pepperoni, ham, bacon bits, and ground pork. Every bite is packed with savory, protein-rich flavors. Perfect for those who crave a hearty, meat-filled pizza experience."
  },
  {
    id: 3,
    name: "Cheeze Pizza",
    price: 239.00,
    category: "Pizza",
    manufacturer: "Kitchen One",
    reviewWebhookUrl: "",
    googleSheetId: "",
    logo: cheese,
    label: cheese,
    productImages: [
      cheese
    ],
    sizes: [
      { label: 'Small (10")', price: 140.00 },
      { label: 'Medium (14")', price: 239.00 },
      { label: 'Large (18")', price: 399.00 }
    ],
    crustTypes: [
      { label: 'Regular' },
      { label: 'Thin' },
      { label: 'Superthin' }
    ],
    sliceTypes: [
      { label: '8 Regular Cut' },
      { label: '16 Regular Cut' },
      { label: '32 Square Cut' }
    ],
    description: "Simple yet delicious. Our classic cheese pizza features a perfect blend of premium mozzarella cheese on our signature hand-tossed crust. Sometimes the simplest things are the best - this timeless favorite never disappoints."
  },
  {
    id: 4,
    name: "Hawaiian",
    price: 305.00,
    category: "Pizza",
    manufacturer: "Kitchen One",
    reviewWebhookUrl: "",
    googleSheetId: "",
    logo: hawaiian,
    label: hawaiian,
    productImages: [
      hawaiian
    ],
    sizes: [
      { label: 'Small (10")', price: 180.00 },
      { label: 'Medium (14")', price: 305.00 },
      { label: 'Large (18")', price: 530.00 }
    ],
    crustTypes: [
      { label: 'Regular' },
      { label: 'Thin' },
      { label: 'Superthin' }
    ],
    sliceTypes: [
      { label: '8 Regular Cut' },
      { label: '16 Regular Cut' },
      { label: '32 Square Cut' }
    ],
    description: "A tropical delight combining sweet pineapple chunks with savory ham and ground beef. The perfect balance of sweet and salty flavors that creates an unforgettable taste experience. A crowd-pleaser for all ages."
  },
  {
    id: 5,
    name: "Pepperoni and Ham",
    price: 335.00,
    category: "Pizza",
    manufacturer: "Kitchen One",
    reviewWebhookUrl: "",
    googleSheetId: "",
    logo: pepperoniHam,
    label: pepperoniHam,
    productImages: [
      pepperoniHam
    ],
    sizes: [
      { label: 'Small (10")', price: 195.00 },
      { label: 'Medium (14")', price: 335.00 },
      { label: 'Large (18")', price: 570.00 }
    ],
    crustTypes: [
      { label: 'Regular' },
      { label: 'Thin' },
      { label: 'Superthin' }
    ],
    sliceTypes: [
      { label: '8 Regular Cut' },
      { label: '16 Regular Cut' },
      { label: '32 Square Cut' }
    ],
    description: "A classic combination of spicy pepperoni and tender ham slices. Topped with premium mozzarella cheese and our special blend of herbs. A perfect choice for traditional pizza lovers."
  },
  {
    id: 6,
    name: "Aloha Chicken Barbecue Pizza",
    price: 329.00,
    category: "Pizza",
    manufacturer: "Kitchen One",
    reviewWebhookUrl: "",
    googleSheetId: "",
    logo: alohaChickenBBQ,
    label: alohaChickenBBQ,
    productImages: [
      alohaChickenBBQ
    ],
    sizes: [
      { label: 'Small (10")', price: 185.00 },
      { label: 'Medium (14")', price: 329.00 },
      { label: 'Large (18")', price: 545.00 }
    ],
    crustTypes: [
      { label: 'Regular' },
      { label: 'Thin' },
      { label: 'Superthin' }
    ],
    sliceTypes: [
      { label: '8 Regular Cut' },
      { label: '16 Regular Cut' },
      { label: '32 Square Cut' }
    ],
    description: "A unique and flavorful pizza featuring cheese, tender chicken, onion and pineapple in our signature barbecue sauce. The perfect blend of smoky, sweet, and savory flavors that will transport you to the islands."
  },
  {
    id: 7,
    name: "Creamy Chicken and Ham Pasta",
    price: 180.00,
    category: "Pasta",
    manufacturer: "Kitchen One",
    reviewWebhookUrl: "",
    googleSheetId: "",
    logo: creamyChickenPasta,
    label: creamyChickenPasta,
    productImages: [
      creamyChickenPasta
    ],
    description: "Tender chicken and savory ham in a rich, creamy white sauce. Served over perfectly cooked pasta with a sprinkle of parmesan cheese. Comfort food at its finest."
  },
  {
    id: 8,
    name: "Oriental Spicy Chicken Pasta",
    price: 190.00,
    category: "Pasta",
    manufacturer: "Kitchen One",
    reviewWebhookUrl: "",
    googleSheetId: "",
    logo: orientalSpicyPasta,
    label: orientalSpicyPasta,
    productImages: [
      orientalSpicyPasta
    ],
    description: "An Asian-inspired pasta dish featuring tender chicken in a spicy, flavorful sauce. Infused with aromatic spices and served with fresh vegetables. For those who enjoy bold, zesty flavors."
  },
  {
    id: 9,
    name: "Tuna Pasta in Fresh Tomatoes and Basil",
    price: 170.00,
    category: "Pasta",
    manufacturer: "Kitchen One",
    reviewWebhookUrl: "",
    googleSheetId: "",
    logo: tunaPasta,
    label: tunaPasta,
    productImages: [
      tunaPasta
    ],
    description: "Fresh tuna mixed with ripe tomatoes and aromatic basil in a light, refreshing sauce. A Mediterranean-inspired dish that's both healthy and delicious. Perfect for a lighter meal option."
  },
  {
    id: 10,
    name: "Potato Wedges",
    price: 120.00,
    category: "Sides",
    manufacturer: "Kitchen One",
    reviewWebhookUrl: "",
    googleSheetId: "",
    logo: potatoWedges,
    label: potatoWedges,
    productImages: [
      potatoWedges
    ],
    description: "Crispy on the outside, tender on the inside. Our hand-cut potato wedges are seasoned to perfection and served hot. The perfect side dish to complement any meal or enjoy on their own."
  }
];
