import React, { useContext, useState, useEffect } from 'react';
import TopPanel from '../Components/TopPanel/TopPanel';
import NewArrival from '../Components/ProductDisplay/NewArrival';
import Categories from '../Components/ProductDisplay/Categories';
import { ShoppingCart } from 'lucide-react';
import { CartContext } from '../Context/CartContext';
import LoadingSpinner from '../Components/LoadingSpinner.tsx/LoadingSpinner';
import { getProducts, Product } from '../api/MockProduct';
import CartDrawer from '../Components/CartComponents/CartDrawer';
import CartIcon from '../Components/CartComponents/CartIcon';
import { useLocation } from 'react-router-dom';



const MarketPlace: React.FC = () => {

  console.log('MarketPlace page rendered');

  const location = useLocation();

  const cartContext = useContext(CartContext);

  const [loading, setLoading] = useState(true);

  const [products, setProducts] = useState<Product[]>([]);

  // useEffect(() => {

  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);

  //   return () => clearTimeout(timer);
  // }, []);


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


  // const cartContext = useContext(CartContext);

  // if (!cartContext) return null;

  // const { openCart, closeCart, isCartOpen, cart, cartCount } = cartContext;


  // useEffect(() => {
  //   if (location.pathname === '/MarketPlace') {

  //     if (cartContext) {
  //       cartContext.closeCart();
  //     }
  //   }
  // }, [cartContext]);


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

      {/* // <div className="w-full min-h-screen overflow-y-auto bg-transparent relative"> */}

      {/* Top Panel */}
      {/* <TopPanel /> */}

      {/*New Arrival*/}
      {/* <NewArrival /> */}


      {/*Categories*/}
      {/* <Categories /> */}

      {/*New Arrival*/}
      <NewArrival products={products} />



      {/*Categories*/}
      <Categories products={products} />




      {/* Cart Icon with Count
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          <button

            onClick={openCart}
            className="bg-Golden text-white p-4 rounded-full shadow-lg h-[64px] w-[64px] transform 
                        hover:scale-95 active:scale-85 
                        cursor-pointer transition-transform duration-200 ease-in-out"

          >
            <ShoppingCart size={32} />


            {cart.length > 0 && (

              <span className="absolute -top-0 -right-1 bg-white text-Golden text-[14px] 
                font-bold px-2 py-0.5 rounded-full shadow-2xl">

                {cartCount}

              </span>
            )}

          </button>
        </div>
      </div>

      {isCartOpen &&
        <CartDrawer />
      } */}

      {/* Cart Icon with Count */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2">
        <CartIcon />
      </div>

    </div >
  );
};

export default React.memo(MarketPlace);
