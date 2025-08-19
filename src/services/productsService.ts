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








// const url = "https://dummyjson.com/products";

// //get function to display all the products
// export const getProducts = async () => {
//     try {
//         const response = await axios.get(url);
//         return response.data.products;
//     } catch (error) {
//         console.error("Error fetching products");
//         return [];
//     }
// };





//delete function to delete the product with specific id
// export const deleteProduct = async <T>(id: number) => {
//     try {
//         await axios.delete<T>(`${url}/${id}`);
//         return true;
//     } catch (error) {
//         console.error(`Error deleting product with id ${id}`);
//         return false;
//     }
// };



// //put function to update the price
// export const updatePrice = async (id: number, newPrice: number) => {
//     try {
//         const response = await axios.put(`${url}/${id}`, {
//             price: newPrice
//         });
//         return response.data;
//     } catch (error) {
//         console.error(`Error updating price for product with id ${id}`);
//         return null;
//     }
// };


// //post function to add new Product
// export const addProduct = async (product: Product) => {
//     try {
//         const response = await axios.post(`${url}/add`, product);
//         return response.data;
//     } catch (error) {
//         console.error("Error adding product");
//         return null;
//     }
// };


