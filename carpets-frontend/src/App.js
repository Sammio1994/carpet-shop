import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ProductPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;