import { getData, addData, updateData, deleteData } from "./apiService";

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


export const getProducts = async () => {

    const data = await getData<{ products: Product[] }>("products");
    return data
        ? data.products
        : [];
};


export const addProduct = (product: Product) =>
    addData<Product, Product>("products/add", product);



export const updatePrice = (id: number, newPrice: number) =>

    updateData<Product, Product>(`products/${id}`, { price: newPrice });


export const deleteProduct = (id: number) =>

    deleteData(`products/${id}`);