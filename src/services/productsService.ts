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
const productAPI = "https://dummyjson.com/products";

export const getProducts = async (): Promise<Product[]> => {
    try {
        const response = await axios.get(productAPI);
        return response.data.products;
    } catch (error) {
        console.error("Error fetching products");
        return [];
    }
};


