import React, { useContext } from 'react';
import TopPanel from '../Components/CommonComponents/TopPanel';
import NewArrival from '../Components/ProductsDisplayComponents/NewArrival';
import Categories from '../Components/ProductsDisplayComponents/Categories';
import { ShoppingCart } from 'lucide-react';
import { CartContext } from '../Context/CartContext';


const MarketPlace: React.FC = () => {
  console.log('MarketPlace page rendered');

  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("CartContext not found. Please wrap with <CartProvider>");
  }

  const { cart, cartCount } = cartContext;


  return (
    <div className="flex flex-col h-full w-full bg-transparent">

    {/* // <div className="w-full min-h-screen overflow-y-auto bg-transparent relative"> */}

      {/* Top Panel */}
      {/* <TopPanel /> */}

      {/*New Arrival*/}
      <NewArrival />

      {/*Categories*/}
      <Categories />


      {/*Cart Icon with Count Badge*/}
      <div className="fixed bottom-6 right-6 z-50">

        <div className="relative">

          <button
            className="bg-Golden text-white p-4 rounded-full shadow-lg h-[64px] w-[64px] "
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

    </div>
  );
};

export default MarketPlace;
