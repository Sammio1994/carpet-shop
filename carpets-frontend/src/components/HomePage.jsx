import './HomePage.css';

const HomePage = () => {
    return (
        <div className="home-container">
            <div className="hero-section">
                <h1 className="hero-title">Welcome to Our Carpet Shop</h1>
                <p className="hero-description">Find the best quality carpets for your home or office, tailored to your style.</p>
            </div>
            <div className="featured-products">
                <div className="product-card">
                    <img src="path_to_image" alt="Product 1" />
                    <h2 className="product-name">Luxury Wool Carpet</h2>
                    <p className="product-price">£120</p>
                    <button className="add-to-cart-btn">Add to Cart</button>
                </div>
                {/* Add more product cards */}
            </div>
        </div>
    );
};

export default HomePage;