import './ProductDetail.css';
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

function ProductDetail({ products }) {
    const { id } = useParams(); // Get the id from the URL
    const navigate = useNavigate();
    const [selectedSize, setSelectedSize] = useState(null); // State for managing the selected size
    const [randomProducts, setRandomProducts] = useState([]); // State to store the shuffled products

    const product = products.find(product => product.id === parseInt(id)); // Find the product matching the id

    // Move useEffect outside of any condition
    useEffect(() => {
        if (product) { // Only shuffle if product exists
            const shuffledProducts = products
                .filter(p => p.id !== product.id)  // Exclude the current product
                .sort(() => 0.5 - Math.random())   // Shuffle the products
                .slice(0, 4);                      // Select only 3 random products

            setRandomProducts(shuffledProducts);
        }
    }, [product, products]);  // Re-run when product or products array changes

    if (!product) {
        return <p>Product not found!</p>;  // Handle case where product is not found
    }

    const goBack = () => {
        navigate(-1);  // Go back to the previous page
    };

    const handleSizeClick = (size) => {
        setSelectedSize(size === selectedSize ? null : size); // Toggle the selected size
    };

    const AnotherElements = randomProducts.length ? (
        randomProducts.map((product) => (
            <Link
                to={`/product/${product.id}`}
                key={product.id}
                className="another-item"
            >
                <div className="another-image">
                    <img src={product.image} alt={product.name} />
                </div>
                <p className="another-name">{product.name}</p>
            </Link>
        ))
    ) : (
        <p>No other products available.</p>
    );

    return (
        <div>
            <nav>
                <div className="nav_Detail hidden">
                    <a href="#home" className="manage nav-btn">Home</a>
                    <a href="#type1" className="manage nav-btn">Type1</a>
                    <a href="#type2" className="manage nav-btn">Type2</a>
                    <a href="#type3" className="manage nav-btn">Type3</a>
                    <a href="#collections" className="manage nav-btn">Collections</a>
                    <a href="#contactus" className="manage nav-btn">Contact Us</a>
                </div>
            </nav>

            <main className="main-1">
                <button onClick={goBack} className="back btn-icon">
                    <i className="uil uil-angle-left-b"></i>
                </button>
                <div className="product-image">
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="product-detail">
                    <p className="pname">{product.name}</p>
                    <p className="pprice">{product.price} ฿</p>
                    <p className="pdetail">{product.detail}</p>
                    
                    <div className="size-options">
                        {['S', 'M', 'L'].map(size => (
                            <button
                                key={size}
                                className={`size-btn ${selectedSize === size ? 'size-active' : ''}`}
                                onClick={() => handleSizeClick(size)}
                                role="button"
                            >
                                {size}
                            </button>
                        ))}
                    </div>
            
                </div>
            </main>

            <section>
                <h2>YOU MAY ALSO LIKE</h2>
                <div className='another-product'>
                    {AnotherElements}
                </div>
            </section>
        </div>
    );
}

export default ProductDetail;
