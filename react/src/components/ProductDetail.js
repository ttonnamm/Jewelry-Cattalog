import './ProductDetail.css';
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ProductDetail({ products }) {
    const { id } = useParams(); // Get the id from the URL
    const navigate = useNavigate();  // Make sure this is outside the early return
    const [selectedSize, setSelectedSize] = useState(null); // State for managing the selected size

    const product = products.find(product => product.id === parseInt(id)); // Find the product matching the id

    if (!product) {
        return <p>Product not found!</p>;
    }

    const goBack = () => {
        navigate(-1);  // Go back to the previous page
    };

    const handleSizeClick = (size) => {
        setSelectedSize(size === selectedSize ? null : size); // Toggle the selected size
    };

    return (
        <div>
            <nav>
                <div class="nav_Item hidden" id="nav-menu">
                    <a href="#home" class="nav_link">Home</a>
                    <a href="#type1" class="nav_link">Type1</a>
                    <a href="#type2" class="nav_link">Type2</a>
                    <a href="#type3" class="nav_link">Type3</a>
                    <a href="#collections" class="nav_link">Collections</a>
                    <a href="#contactus" class="nav_link">Contact Us</a>
                </div>
            </nav>
            <main className="main-1">
                <button onClick={goBack} className="btn-secondary">
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
                                className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                                onClick={() => handleSizeClick(size)}
                                role="button"
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default ProductDetail;
