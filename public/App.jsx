import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CartProvider } from '../src/contexts/CartContext.jsx';
import LandingPage from '../src/pages/LandingPage.jsx';
import ProductListingPage from '../src/pages/ProductListingPage.jsx';
import ShoppingCartPage from '../src/pages/ShoppingCartPage.jsx';
import '../src/pages/styles.css'; // Import your CSS file

function App() {
    return (
        <CartProvider>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/products" element={<ProductListingPage />} />
                <Route path="/cart" element={<ShoppingCartPage />} />
            </Routes>
        </CartProvider>
    );
}

export default App;
