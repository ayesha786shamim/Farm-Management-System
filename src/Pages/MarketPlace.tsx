import React, { useContext, useState, useEffect } from 'react';
import NewArrival from '../Components/ProductDisplay/NewArrival';
import Categories from '../Components/ProductDisplay/Categories';
import { CartContext } from '../Context/CartContext';
import LoadingSpinner from '../Components/LoadingSpinner.tsx/LoadingSpinner';
import { getProducts, Product } from '../api/MockProduct';
import CartIcon from '../Components/CartComponents/CartIcon';


const MarketPlace: React.FC = () => {

  console.log('MarketPlace page rendered');

  const cartContext = useContext(CartContext);

  const [loading, setLoading] = useState(true);

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {

    const FetchData = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
        setLoading(false);
      }
      catch {
        console.log('Failed to fetch data');
      }
    };
    FetchData();
  }, []);

  useEffect(() => {

    if (cartContext) {
      cartContext.closeCart();
    }
  }, []);


  if (!cartContext) {

    return null;

  }

  if (loading) {

    return <LoadingSpinner />;

  }


  return (
    <div className="flex flex-col h-full w-full bg-transparent">


      {/*newArrival*/}
      <NewArrival products={products.filter((product) =>
        product.newArrival
      )} />


      {/*Categories*/}
      <Categories products={products} />

      {/* Cart icon with count */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2">
        <CartIcon />
      </div>

    </div >
  );
};

export default React.memo(MarketPlace);
