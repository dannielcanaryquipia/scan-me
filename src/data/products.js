import pastiyumLogo from '../assets/images/products/pastiyum/pastiyum-logo.png';
import pastiyumLabel from '../assets/images/products/pastiyum/pastiyum-label.jpg';

import pastiyumProduct2 from '../assets/images/products/pastiyum/pastiyum-product-2.jpg';
import pastiyumProduct3 from '../assets/images/products/pastiyum/pastiyum-product-3.jpg';

import langkaLogo from '../assets/images/products/langka-chips/langka-chips-logo.png';
import langkaLabel from '../assets/images/products/langka-chips/langka-chips-label.jpg';
import langkaProduct1 from '../assets/images/products/langka-chips/langka-chips-product-1.jpg';
import langkaProduct2 from '../assets/images/products/langka-chips/langka-chips-product-2.jpg';



import palawanLogo from '../assets/images/products/palawan-chips/palawan-chips-logo.png';
import palawanLabel from '../assets/images/products/palawan-chips/palawan-chips-label.jpg';
import palawanProduct1 from '../assets/images/products/palawan-chips/palawan-chips-product-1.jpg';
import palawanProduct2 from '../assets/images/products/palawan-chips/palawan-chips-product-2.jpg';
import palawanProduct3 from '../assets/images/products/palawan-chips/palawan-chips-product-3.jpg';

import pilipulpLogo from '../assets/images/products/pilipulp/pilipulp-logo.png';
import pilipulpLabel from '../assets/images/products/pilipulp/pilipulp-label.jpg';
import pilipulpProduct1 from '../assets/images/products/pilipulp/pilipulp-product-1.jpg';
import pilipulpProduct2 from '../assets/images/products/pilipulp/pilipulp-product-2.jpg';

import pawpayaLogo from '../assets/images/products/pawpaya-crackers/pawpaya-crackers-logo.png';
import pawpayaLabel from '../assets/images/products/pawpaya-crackers/pawpaya-crackers-label.jpg';
import pawpayaProduct1 from '../assets/images/products/pawpaya-crackers/pawpaya-crackers-product-1.jpg';
import pawpayaProduct2 from '../assets/images/products/pawpaya-crackers/pawpaya-crackers-product-2.jpg';

export const products = [
  {
    id: 1,
    name: "Pastiyum",
    price: 15.00,
    manufacturer: "ES'LADIESMA CO.",
    reviewWebhookUrl: "https://script.google.com/macros/s/AKfycbwrEelc6fs70bxp-L8NM5Gm5xD0OxHsss_L0ofV12D_fdNovrDY54nt6FSgRKG5RRq-Vg/exec",
    googleSheetId: "14CSGeIU9_YXpQ2di55oqymDM3RXZV3G07Cw5PX-XoFs",
    logo: pastiyumLogo,
    label: pastiyumLabel,
    productImages: [
      pastiyumProduct2,
      pastiyumProduct3
    ],
    description: "The proposed product is banana pastillas, a product that innovates traditional pastillas to provide enhanced taste and satisfaction for customers. Pastillas are ideal for snacks and treats.",
    contact: {
      phone: ["09951403957"],
      facebook: "ES' LADIESMA COMPANY",
      location: "Bonifacio St., Brgy. Paradijon, Gubat, Sorsogon"
    }
  },
  {
    id: 2,
    name: "Langka Chips",
    price: 35.00,
    manufacturer: "BoRoRo Bites Company",
    reviewWebhookUrl: "https://script.google.com/macros/s/AKfycbwayofzFmyILVavKPSbH3F0V5jkqGTspHhV1cG2xwmOIUFM-KAFrd7PF0sR1a--U4Yu/exec",
    googleSheetId: "14V8YbK7XrSGKRi1k5eh3KXYDn_lTecuSdsq_nurwNmg",
    logo: langkaLogo,
    label: langkaLabel,
    productImages: [
      langkaProduct1,
      langkaProduct2
    ],
    description: `Langka Chips are crispy, crunchy, and flavorful chips made from unripe jackfruit, available in Classic, Cheese, Sour Cream, BBQ, and Spicy flavors. This snack targets all genders aged 15 to 60 with the goal of promoting vegetable consumption among teenagers and encouraging a balanced diet for all consumers.`,
    contact: {
      phone: ["09287479732", "09668479656"],
      facebook: "karl'skitchendeleciomai",
      location: "Manook St., Gubat, Sorsogon (along highway road)"
    }
  },
  {
    id: 3,
    name: "Palawan Chips",
    price: 12.00,
    manufacturer: "CAMZA Co.",
    reviewWebhookUrl: "https://script.google.com/macros/s/AKfycbwFm1kYQVbIcdcwkTo2XhjVvcpEDUseInV1oxHZRr0Z6MvydF1c59cBZjQtV3JPHztd/exec",
    googleSheetId: "1hDk0Xbn8n84a4Dy7LaC4mnq3aYjnUsS1tpXiF0VzRsA",
    logo: palawanLogo,
    label: palawanLabel,
    productImages: [
      palawanProduct1,
      palawanProduct2,
      palawanProduct3
    ],
    sizes: [
      { label: 'Large', price: 50.00 },
      { label: 'Small', price: 12.00 }
    ],
    contact: {
      phone: ["+639457513160"],
      facebook: "CAMZA Company",
      location: "Purok 4, Masipag St., Brgy. Ogao, Gubat, Sorsogon"
    },
    description: `Palawan chips is made with Palawan root crops with a scientific name “Giant swamp taro”. According to the study conducted by UP Los Baños (Santonia, 2022), Palawan contains many Vitamins and Minerals. It contains Protein, Vitamin A, Vitamin C, Zinc, Iron and Calcium. With this, the Palawan chips are healthy and good for everyone. A snack that can be enjoyed by everyone, anytime and everywhere, an on-the-go snack good for people who want to enjoy their food while walking. In this generation, people want to explore and try new things and this Palawan chips will satisfy their cravings for finding unique kinds of chips.  The Palawan chips come in a variety of flavors, which are Original, Cheese, Sour and Cream, and Barbeque flavors. Palawan chips embody the rich flavors and natural goodness of a unique root crop, making it a delicious treat. 
Palawan chips are appetizing and flavorful along with ready-made snacks produced by natural as well as sustainable ingredients and freshly harvested Palawan root crops. Catering to various dietary preferences, offering a guilt-free snack making it a good choice for those looking for a healthy satisfying snack good for health-conscious customers. Palawan chips are a delicious option for those who are looking an on-the-go snack or an appetizer. Providing a high consistency of crispy texture amidst a perfect balance of a variety of flavors. It is also a cost-effective alternative for premium snacks in which customers can enjoy a snack with quality, healthy, convenient and budget-friendly.
A new and unique kind of chip that will help promote local goods in Gubat because the main ingredient for these chips is giant swamp taro root crops which can be found on local places of Gubat, ensuring a fast and seamless production of the product. Palawan chip is available from Monday to Friday from 8:00 AM to 5:00 PM at Gubat National High School. The pricing range will be 50 Pesos per pack.`
  },
  {
    id: 4,
    name: "Pilipulp",
    price: 20.00,
    manufacturer: "Pili Pulp Pastry",
    reviewWebhookUrl: "https://script.google.com/macros/s/AKfycbyCWVxL-eiV3_TR4gKe5k10k-qN24t_EkSUZ1Px4abqtaYvsVp2XUhK5MVQ0OhfU5d8/exec",
    googleSheetId: "1WDvzWYTARmhBTyXry226k_pUvFuyxZE5Pir-HYmZMwY",
    logo: pilipulpLogo,
    label: pilipulpLabel,
    productImages: [
      pilipulpProduct1,
      pilipulpProduct2
    ],
    description: "Pili Pulp Cookie is made with pili pulp and pili nut that is locally sourced specifically in Union, Gubat, Sorsogon. These ingredients give the cookies a sweet and nutty flavor, unlike the traditional cookie found in the local market. Moreover, the target market of pili pulp cookies are male and female aged 12 to 60 years old and residents from eight (8) barangays of Gubat: Pinontingan, Panganiban, Balud Sur, Balud Norte, Cota na Daco, Luna Candol, Manook, and Paradijon. Pili Pulp Cookies is an alternative snack that is good for everyone, from children who enjoy sweet treats to adults who's looking for a unique flavor of snacks. The cookies unique ingredient can attract those individuals seeking for a delicious and healthy snack. The cookie is relevant to address the consumers need because consumers will no longer worry about their sugar intake because of its healthy ingredient.According to the study of Dumandan, et al (2022), Pili Pulp contains an appreciable amount of oil that has a carotenoid, phytosterols and tocopherols. These benefits act as antioxidants that benefits the skin and the immune system's function. In addition, the oil of the Pili Pulp has Phytosterols that lowers cholesterol, antioxidant and, anti- bacterial. The company assures that the pili pulp cookies are made to make everyone healthy and at the same time satisfy their cravings without worrying too much.Pili Pulp Pastry company's objective focuses on producing a unique product made with Pili as one of Bicol's products. The company assures every customer to produce a product that would satisfy their cravings. Furthermore, the company also aims to provide support to local Pili farmers by buying their products directly, in this way the proponents can help and support each farmer. The Pili Pulp Pastry offer a medium size cookies with a price range of Php 20.00 per piece. The product will be packed in a kraft paper pack and box, and each cookie is sealed with plastic to maintain the crispiness of the product. Each pack contains five (5) pieces of cookies that will be sold for ₱90.00, and every box contains ten (10) pieces of cookies that will be sold for ₱180.00 as discounted price.",
    contact: {
      phone: ["09319917993"],
      facebook: "Pili Pulp Pastry",
      location: "Brgy. Union, Gubat, Sorsogon"
    },
  },
  {
    id: 5,
    name: "Pawpaya Crackers",
    price: 23.00,
    manufacturer: "Crispaya Co.",
    reviewWebhookUrl: "https://script.google.com/macros/s/AKfycbzdtEAZ2E3ahyrxyljLR3HKfEEi3qx7FTSNWvyelpmF3-2c6tNqWILYWOFdNLINUX8S/exec",
    googleSheetId: "1Az-HVGHTVl0N5CJTLxBjQIrNTvJioNsffPGAjR-1VJk",
    logo: pawpayaLogo,
    label: pawpayaLabel,
    productImages: [
      pawpayaProduct1,
      pawpayaProduct2
    ],
    description: "The Pawpaya Crackers is an innovative food venture that introduces papaya-based crackers as a unique and healthy alternative to traditional snacks.",
    contact: {
      phone: ["09122686414"],
      facebook: "Crispaya Co",
      location: "Brgy. San Antonio, Barcelona, Sorsogon"
    },
  }
];
