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
  const res = await fetch('https://fakestoreapi.com/products');

  if (!res.ok) {
    throw new Error('Failed to fetch products from FakeStore API');
  }

  const data: Product[] = await res.json();
  return data;
};
