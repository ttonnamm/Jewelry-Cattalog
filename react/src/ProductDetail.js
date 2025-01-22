import './App.css';
import React from "react";
import { useParams } from "react-router-dom";

function ProductDetail({ products }) {
    const { id } = useParams(); // ดึงค่า id จาก URL
    const product = products.find(product => product.id === parseInt(id)); // หา product ที่มี id ตรงกับที่เลือก

    if (!product) {
        return <p>Product not found!</p>;
    }

    return (
        <div className="product-detail">
            <div className="product-image">
                <img src={product.image} alt={product.name} />
            </div>
            <p>{product.name}</p>
            <p>{product.price} ฿ </p>
            <p>{product.detail}</p>
        </div>
    );
}

export default ProductDetail;
