export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

const mockFarmProducts: Product[] = [
  {
    id: 1,
    title: "IFFCO Urea",
    price: 1210,
    image: "/images/Urea1.svg",
    description: "High-quality nitrogen fertilizer for increased crop yield. Suitable for all soil types.",
    category: "Fertilizer"
  },
  {
    id: 2,
    title: "DAP Fertilizer",
    price: 2250,
    image: "/images/Urea2.svg",
    description: "Rich in nitrogen and phosphorus. Ideal for rice, wheat, and maize crops.",
    category: "Fertilizer"
  },
  {
    id: 3,
    title: "NPK Fertilizer",
    price: 320,
    image: "/images/Urea3.svg",
    description: "Balanced water-soluble fertilizer suitable for vegetables, fruits, and flowers.",
    category: "Fertilizer"
  },
  {
    id: 4,
    title: "Potash Fertilizer",
    price: 1800,
    image: "/images/Urea4.svg",
    description: "Promotes root development and improves resistance to drought and disease.",
    category: "Fertilizer"
  },
  {
    id: 5,
    title: "Micronutrient",
    price: 220,
    image: "/images/Urea1.svg",
    description: "Corrects zinc deficiency and improves crop quality and yield.",
    category: "Pesticides"
  },
  {
    id: 6,
    title: "Calcium Nitrate",
    price: 260,
    image: "/images/Urea2.svg",
    description: "Calcium and nitrate for fruit firmness and longer shelf life.",
    category: "Fertilizer"
  },
  {
    id: 7,
    title: "Magnesium Sulphate",
    price: 150,
    image: "/images/Urea3.svg",
    description: "Essential micronutrient for chlorophyll formation and healthy plant growth.",
    category: "Pesticides"
  },
  {
    id: 8,
    title: "Micronutrient",
    price: 180,
    image: "/images/Urea4.svg",
    description: "Improves pollination, fruit setting, and root development.",
    category: "Pesticides"
  },
  {
    id: 9,
    title: "Weed Detection Kit",
    price: 750,
    image: "/images/Urea1.svg",
    description: "Handheld kit designed to help farmers identify and monitor weed presence in soil.",
    category: "Weed"
  },
  {
    id: 10,
    title: "Bio Fertilizer",
    price: 320,
    image: "/images/Urea2.svg",
    description: "Improves nitrogen fixation and promotes healthy root growth.",
    category: "Fertilizer"
  },
  {
    id: 11,
    title: "Organic Manure",
    price: 950,
    image: "/images/Urea3.svg",
    description: "Organic phosphorus source for improving soil structure and fertility.",
    category: "Fertilizer"
  },
  {
    id: 12,
    title: "Neem Coated Urea",
    price: 1245,
    image: "/images/Urea4.svg",
    description: "Neem coated for slow nitrogen release and reduced nitrogen loss.",
    category: "Fertilizer"
  },
    {
    id: 13,
    title: "Glyphosate Herbicide",
    price: 130,
    image: "/images/Urea2.svg",
    description: "Broad-spectrum herbicide for effective weed control in crops.",
    category: "Weed"
  },
  {
    id: 14,
    title: "Glyphosate Herbicide",
    price: 130,
    image: "/images/Urea2.svg",
    description: "Broad-spectrum herbicide for effective weed control in crops.",
    category: "Weed"
  },
  {
    id: 15,
    title: "Atrazine Weed Killer",
    price: 145,
    image: "/images/Urea3.svg",
    description: "Selective herbicide used for pre- and post-emergence weed control in corn and sugarcane.",
    category: "Weed"
  },
  {
    id: 16,
    title: "Pendimethalin",
    price: 350,
    image: "/images/Urea4.svg",
    description: "Pre-emergent herbicide to control annual grasses and broadleaf weeds.",
    category: "Weed"
  },

  {
    id: 17,
    title: "Sulphur Fertilizer",
    price: 470,
    image: "/images/Urea1.svg",
    description: "Improves oil content in oilseeds and protein synthesis in cereals.",
    category: "Fertilizer"
  },
  {
    id: 18,
    title: "Ferrous Sulphate",
    price: 135,
    image: "/images/Urea2.svg",
    description: "Micronutrient supplement for preventing iron deficiency in crops.",
    category: "Pesticides"
  },
  {
    id: 19,
    title: "Herbicide Sprayer",
    price: 1650,
    image: "/images/Urea2.svg",
    description: "Portable sprayer designed for effective herbicide application in weed management.",
    category: "Weed"
  },
  {
    id: 20,
    title: "Tricho Fungicide",
    price: 300,
    image: "/images/Urea4.svg",
    description: "Biological fungicide for seed and soil-borne disease control.",
    category: "Pesticides"
  }

];

export const getProducts = async (): Promise<Product[]> => {

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockFarmProducts);
    }, 500);
  });
};
