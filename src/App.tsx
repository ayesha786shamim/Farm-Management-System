import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './Pages/DashBoard';
import MarketPlace from './Pages/MarketPlace';
import ManageFarm from './Pages/ManageFarm';
import Warehouse from './Pages/Warehouse';
import Lands from './Pages/Lands';
import ProductDetail from './Pages/ProductDetail';
import Checkout from './Components/OtherComponents/CheckoutInformation';
import OrderHistory from './Pages/OrderHistory';
// import RoleSelection from './Pages/RoleSelection';
// import AuthPage from './Pages/AuthPage';
import Inventory from './Pages/Inventory';
import Layout from './Layout/Layout';
import { CartProvider } from './Context/CartContext';


const App: React.FC = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>

          {/* routes without sidebar or top panel */}
          {/* <Route path="/" element={<RoleSelection />} />
          <Route path="/AuthPage" element={<AuthPage />} /> */}

          <Route path="/" element={<Navigate to="/MarketPlace" />} />

          {/* Layout with sidebar and the top panel */}
          <Route element={<Layout />} >

            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/ManageFarm" element={<ManageFarm />} />
            <Route path="/Warehouse" element={<Warehouse />} />
            <Route path="/Lands" element={<Lands />} />
            <Route path="/MarketPlace" element={<MarketPlace />} />
            <Route path="/Marketplace/ProductDetail" element={<ProductDetail />} />
            <Route path="/Marketplace/ProductDetail/Checkout" element={<Checkout />} />
            <Route path="/MarketPlace/OrderHistory" element={<OrderHistory />} />
            <Route path="/MarketPlace/OrderHistory/Inventory" element={<Inventory />} />


          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;

