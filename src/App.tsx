import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Dashboard from './Pages/DashBoard';
import MarketPlace from './Pages/MarketPlace';
import ManageFarm from './Pages/ManageFarm';
import Warehouse from './Pages/Warehouse';
import Lands from './Pages/Lands';
import Sidebar from './Components/CommonComponents/Sidebar';
import ProductDetail from './Pages/ProductDetail';
import { CartProvider } from './Context/CartContext';
import Checkout from './Components/OtherComponents/CheckoutInformation';
import OrderHistory from './Pages/OrderHistory';
import Inventory from './Pages/Inventory';
import TopPanel from './Components/CommonComponents/TopPanel';


const App: React.FC = () => {
  console.log('App rendered');

  return (

    <CartProvider>
      <BrowserRouter>

        <div className="flex h-screen w-screen overflow-hidden">

          <Sidebar />

          <div className="w-full flex-1 flex flex-col overflow-auto bg-Background_Color">

            <TopPanel/>

            <Routes>
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/ManageFarm" element={<ManageFarm />} />
              <Route path="/Warehouse" element={<Warehouse />} />
              <Route path="/Lands" element={<Lands />} />
              <Route path="/MarketPlace/OrderHistory/Inventory" element={<Inventory />} />
              <Route path="/MarketPlace" element={<MarketPlace />} />
              <Route path="/Marketplace/ProductDetail" element={<ProductDetail />} />
              <Route path="/Marketplace/ProductDetail/Checkout" element={<Checkout />} />
              <Route path="/MarketPlace/OrderHistory" element={<OrderHistory />} />

            </Routes>

          </div>

        </div>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;


// import React from 'react';
// import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
// import Dashboard from './Pages/DashBoard';
// import MarketPlace from './Pages/MarketPlace';
// import ManageFarm from './Pages/ManageFarm';
// import Warehouse from './Pages/Warehouse';
// import Lands from './Pages/Lands';
// import Sidebar from './Components/CommonComponents/Sidebar';
// import ProductDetail from './Pages/ProductDetail';
// import { CartProvider } from './Context/CartContext';
// import Checkout from './Components/OtherComponents/ContactInformation';
// import OrderHistory from './Pages/OrderHistory';
// import Inventory from './Pages/Inventory';
// import RoleSelection from './Pages/RoleSelection';
// import AuthPage from './Pages/AuthPage';
// import MarketPlaceAdmin from './Pages/MarketPlaceAdmin';
// import AdminAddProduct from './Pages/AdminAddProduct';

// const SidebarLayout: React.FC = () => (

//   <div className="flex h-screen w-screen overflow-hidden">

//     <Sidebar />

//     <div className="flex-1 flex flex-col overflow-hidden bg-Background_Color">

//       <Outlet />

//     </div>
//   </div>
// );

// const App: React.FC = () => {
//   console.log('App rendered');

//   return (
//     <CartProvider>
//       <BrowserRouter>
//         <Routes>

//           <Route path="/" element={<RoleSelection />} />
//           <Route path="/AuthPage" element={<AuthPage />} />

//           {/* Routes with sharesidebar layout */}
//           <Route element={<SidebarLayout />}>
          
//             <Route path="/Dashboard" element={<Dashboard />} />
//             <Route path="/ManageFarm" element={<ManageFarm />} />
//             <Route path="/Warehouse" element={<Warehouse />} />
//             <Route path="/Lands" element={<Lands />} />
//             <Route path="/MarketPlace" element={<MarketPlace />} />
//             <Route path="/Marketplace/ProductDetail" element={<ProductDetail />} />
//             <Route path="/Marketplace/ProductDetail/Checkout" element={<Checkout />} />
//             <Route path="/MarketPlace/OrderHistory" element={<OrderHistory />} />
//             <Route path="/MarketPlace/OrderHistory/Inventory" element={<Inventory />} />

//             <Route path="/MarketPlaceAdmin" element={<MarketPlaceAdmin />} />
//             <Route path="/MarketPlaceAdmin/AdminAddProduct" element={<AdminAddProduct />} />

//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </CartProvider>
//   );
// };

// export default App;

