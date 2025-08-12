export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
  newArrival?: boolean;
  features: string[];
}

const mockFarmProducts: Product[] = [
  {
    id: 1,
    title: "IFFCO Urea",
    price: 1210,
    image: "/images/Urea1.svg",
    description:
      "IFFCO Urea provides a concentrated nitrogen source that supports vigorous plant growth, especially during early vegetative stages. Ideal for cereals, pulses, and oilseeds.",
    category: "Fertilizer",
    newArrival: true,
    features: [
      "High nitrogen content for rapid growth",
      "Suitable for various soil types",
      "Boosts crop yield and quality"
    ]
  },
  {
    id: 2,
    title: "DAP Fertilizer",
    price: 2250,
    image: "/images/Urea2.svg",
    description:
      "DAP (Di-Ammonium Phosphate) supplies essential phosphorus and nitrogen for strong root development and flowering. Suitable for early crop growth stages across various crops.",
    category: "Fertilizer",
    newArrival: true,
    features: [
      "Promotes early root growth",
      "Ideal for cereals, fruits, and vegetables",
      "Enhances flowering and fruiting"
    ]
  },
  {
    id: 3,
    title: "NPK Fertilizer",
    price: 320,
    image: "/images/Urea3.svg",
    description:
      "A balanced mix of nitrogen, phosphorus, and potassium to meet complete nutrient requirements. Excellent for home gardens, vegetables, flowers, and fruit-bearing plants.",
    category: "Fertilizer",
    newArrival: true,
    features: [
      "Balanced nutrient composition",
      "Improves overall plant health",
      "Suitable for all growth stages"
    ]
  },
  {
    id: 4,
    title: "Potash Fertilizer",
    price: 1800,
    image: "/images/Urea4.svg",
    description:
      "Potash improves drought resistance, enhances crop color and taste, and strengthens plant cell walls for better yield quality. Great for sugarcane, potatoes, and vegetables.",
    category: "Fertilizer",
    newArrival: true,
    features: [
      "Improves drought tolerance",
      "Enhances crop taste and color",
      "Strengthens plant cell structure"
    ]
  },
  {
    id: 5,
    title: "Micronutrient",
    price: 220,
    image: "/images/Urea1.svg",
    description:
      "Formulated with zinc, boron, and iron to address hidden hunger in crops. Essential for enzyme activity, chlorophyll formation, and fruit quality in vegetables and grains.",
    category: "Pesticides",
    newArrival: true,
    features: [
      "Corrects micronutrient deficiencies",
      "Improves fruit quality",
      "Boosts enzyme activity"
    ]
  },
  {
    id: 6,
    title: "Calcium Nitrate",
    price: 260,
    image: "/images/Urea2.svg",
    description:
      "Dual nutrient formula for stronger cell walls and prevention of blossom end rot in tomatoes, peppers, and fruits. Improves overall fruit firmness and shelf life.",
    category: "Fertilizer",
    newArrival: true,
    features: [
      "Prevents blossom end rot",
      "Improves fruit firmness",
      "Strengthens plant structure"
    ]
  },
  {
    id: 7,
    title: "Magnesium Sulphate",
    price: 150,
    image: "/images/Urea3.svg",
    description:
      "Supplies magnesium and sulfur—vital for chlorophyll synthesis and protein formation. Recommended for leafy vegetables and fruit crops during active growth.",
    category: "Pesticides",
    newArrival: false,
    features: [
      "Enhances chlorophyll production",
      "Improves crop protein content",
      "Supports healthy leaf development"
    ]
  },
  {
    id: 8,
    title: "Micronutrient",
    price: 180,
    image: "/images/Urea4.svg",
    description:
      "Specially formulated to enhance pollination, improve flowering, and boost fruit setting. Ideal for fruit trees, cotton, and vegetable crops.",
    category: "Pesticides",
    newArrival: false,
    features: [
      "Boosts pollination efficiency",
      "Improves flowering rate",
      "Increases fruit set percentage"
    ]
  },
  {
    id: 9,
    title: "Weed Detection Kit",
    price: 750,
    image: "/images/Urea1.svg",
    description:
      "Compact and user-friendly toolkit to help farmers detect and analyze weed species. Useful for early intervention and precision weed management in farms.",
    category: "Weed",
    newArrival: false,
    features: [
      "Accurate weed identification",
      "Portable and easy to use",
      "Helps in early weed control"
    ]
  },
  {
    id: 10,
    title: "Bio Fertilizer",
    price: 320,
    image: "/images/Urea2.svg",
    description:
      "Eco-friendly microbial inoculant that improves soil health, enhances root biomass, and fixes atmospheric nitrogen. Ideal for sustainable farming practices.",
    category: "Fertilizer",
    newArrival: false,
    features: [
      "Environmentally friendly",
      "Improves soil fertility",
      "Fixes atmospheric nitrogen"
    ]
  },
  {
    id: 11,
    title: "Organic Manure",
    price: 950,
    image: "/images/Urea3.svg",
    description:
      "Natural soil conditioner made from decomposed organic matter. Enriches soil texture, increases water retention, and boosts microbial activity.",
    category: "Fertilizer",
    newArrival: false,
    features: [
      "Improves soil texture",
      "Enhances water retention",
      "Boosts microbial activity"
    ]
  },
  {
    id: 12,
    title: "Neem Coated Urea",
    price: 1245,
    image: "/images/Urea4.svg",
    description:
      "Slow-release nitrogen source treated with neem to reduce leaching and volatilization. Enhances nutrient uptake efficiency and reduces pest infestation.",
    category: "Fertilizer",
    newArrival: false,
    features: [
      "Slow nutrient release",
      "Reduces nitrogen loss",
      "Minimizes pest attacks"
    ]
  },
  {
    id: 13,
    title: "Glyphosate Herbicide",
    price: 130,
    image: "/images/Urea2.svg",
    description:
      "Non-selective systemic herbicide effective against annual and perennial weeds. Ideal for field preparation, post-harvest cleaning, and plantation crops.",
    category: "Weed",
    newArrival: false,
    features: [
      "Kills a wide range of weeds",
      "Effective pre-plant treatment",
      "Quick visible results"
    ]
  },
  {
    id: 14,
    title: "Glyphosate Herbicide",
    price: 130,
    image: "/images/Urea2.svg",
    description:
      "Fast-acting herbicide used to clear unwanted weeds in orchards, field bunds, and non-crop areas. Rainfast within hours of application.",
    category: "Weed",
    newArrival: false,
    features: [
      "Fast action formula",
      "Rainfast within hours",
      "Clears large weed areas quickly"
    ]
  },
  {
    id: 15,
    title: "Atrazine Weed Killer",
    price: 145,
    image: "/images/Urea3.svg",
    description:
      "Pre- and post-emergence herbicide offering long-lasting control of broadleaf and grassy weeds. Commonly used in sugarcane, maize, and sorghum crops.",
    category: "Weed",
    newArrival: false,
    features: [
      "Long-lasting weed control",
      "Effective on grasses and broadleaf weeds",
      "Suitable for multiple crops"
    ]
  },
  {
    id: 16,
    title: "Pendimethalin",
    price: 350,
    image: "/images/Urea4.svg",
    description:
      "Selective pre-emergence herbicide forming a protective layer in the soil. Controls weeds in soybean, cotton, pulses, and vegetables effectively.",
    category: "Weed",
    newArrival: false,
    features: [
      "Selective pre-emergence control",
      "Prevents weed seed germination",
      "Suitable for multiple crop types"
    ]
  },
  {
    id: 17,
    title: "Sulphur Fertilizer",
    price: 470,
    image: "/images/Urea1.svg",
    description:
      "Essential for protein synthesis and oil formation in crops. Enhances flavor and aroma in onion, garlic, and oilseed crops like mustard.",
    category: "Fertilizer",
    newArrival: false,
    features: [
      "Boosts protein synthesis",
      "Enhances crop aroma and taste",
      "Improves oil content in seeds"
    ]
  },
  {
    id: 18,
    title: "Ferrous Sulphate",
    price: 135,
    image: "/images/Urea2.svg",
    description:
      "Soluble iron supplement to treat iron chlorosis in crops. Promotes greener leaves and better photosynthesis in turf, citrus, and paddy fields.",
    category: "Pesticides",
    newArrival: false,
    features: [
      "Corrects iron deficiency",
      "Promotes green leaf color",
      "Improves photosynthesis"
    ]
  },
  {
    id: 19,
    title: "Herbicide Sprayer",
    price: 1650,
    image: "/images/Urea2.svg",
    description:
      "Ergonomic and portable sprayer compatible with most herbicide solutions. Provides uniform coverage and reduces chemical waste during application.",
    category: "Weed",
    newArrival: false,
    features: [
      "Lightweight and portable",
      "Even chemical distribution",
      "Reduces spray wastage"
    ]
  },
  {
    id: 20,
    title: "Tricho Fungicide",
    price: 300,
    image: "/images/Urea4.svg",
    description:
      "Biological control agent containing Trichoderma spores. Protects crops from fungal pathogens like Fusarium, Rhizoctonia, and Pythium in soil and seeds.",
    category: "Pesticides",
    newArrival: false,
    features: [
      "Natural fungal disease control",
      "Improves soil health",
      "Safe for crops and environment"
    ]
  }
];



export const getProducts = async (): Promise<Product[]> => {

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockFarmProducts);
    }, 500);
  });
};



// mention
// axios