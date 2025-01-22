import './App.css';
import React from "react";
import { Link } from "react-router-dom";

function ProductItem(props) {
    const { products } = props; // รับ props เป็นข้อมูลสินค้าทั้งหมด
    return (
        <div className="product-grid">
            {products.map((product) => (
                <Link to={`/product/${product.id}`} key={product.id} className="product-item" data-type={product.type} data-material={product.materal}>
                    <div className="product-image">
                        <img src={product.image} alt={product.name} />
                    </div>
                    <p className="product-name">{product.name}</p>
                    <p className="product-price">{product.price} ฿</p>
                </Link>
            ))}
        </div>
    );
}

export default ProductItem;
