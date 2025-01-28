import './ProductDetail.css';
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

function ProductDetail({ products }) {
    const { id } = useParams(); 
    const navigate = useNavigate();
    const [selectedSize, setSelectedSize] = useState(null); 
    const [randomProducts, setRandomProducts] = useState([]); 

    const product = products.find(product => product.id === parseInt(id));

    useEffect(() => {
        if (product) { 
            const shuffledProducts = products
                .filter(p => p.id !== product.id)  
                .sort(() => 0.5 - Math.random())   
                .slice(0, 4);                      

            setRandomProducts(shuffledProducts);
        }
    }, [product, products]); 

    if (!product) {
        return <p>Product not found!</p>;  
    }

    const goBack = () => {
        navigate(-1);  
    };
    

    const handleSizeClick = (size) => {
        setSelectedSize(size === selectedSize ? null : size); 
    };

    const RelatedProducts = randomProducts.length ? (
        randomProducts.map((relatedProduct) => (
            <Link
                to={`/product/${relatedProduct.id}`}
                key={relatedProduct.id}
                className="another-item"
            >
                <div className="another-image">
                    <img src={`/${relatedProduct.image}`}  alt={relatedProduct.name} />
                </div>
                <p className="another-name">{relatedProduct.name}</p>
            </Link>
        ))
    ) : (
        <p>No other products available.</p>
    );

    return (
        <div>
            <nav>
                <div className="nav_Detail hidden">
                    <Link to="/" className="manage nav-btn">All Products</Link>
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
                    <img src={`/${product.image}`} alt={product.name} /> 
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
                    {RelatedProducts}
                </div>
            </section>
        </div>
    );
}

export default ProductDetail;
