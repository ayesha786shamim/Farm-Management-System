import axios from "axios";

export interface Product {
    id: number;
    title: string;
    price: number;
    // image: string;
    images: string[];
    description: string;
    category: string;
    newArrival?: boolean;
    features: string[];
}
const API_URL = "https://dummyjson.com/products";

export const getProducts = async (): Promise<Product[]> => {
    try {
        const response = await axios.get(API_URL);
        return response.data.products;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};


