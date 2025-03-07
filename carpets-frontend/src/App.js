import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import ProductPage from './components/pages/ProductPage';
import Navbar from './components/Navbar';  // Import Navbar

const App = () => {
    return (
        <Router>
            <Navbar />  {/* Add Navbar here */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductPage />} />
            </Routes>
        </Router>
    );
};

export default App;