export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description : string;
  category: string;
}

export const getProducts = async (): Promise<Product[]> => 
  {
  const responce = await fetch('https://fakestoreapi.com/products');

  if (!responce.ok) {
    throw new Error('Failed to fetch products from FakeStore API');
  }

  const data: Product[] = await responce.json();
  return data;
};
