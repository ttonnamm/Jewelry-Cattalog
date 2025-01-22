import './ProductDetail.css'
import React from "react";
import { useParams } from "react-router-dom";

function ProductDetail({ products }) {
    const { id } = useParams(); // ดึงค่า id จาก URL
    const product = products.find(product => product.id === parseInt(id)); // หา product ที่มี id ตรงกับที่เลือก

    if (!product) {
        return <p>Product not found!</p>;
    }

    return (
        <main className="main-1">
            <div className="product-image">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="product-detail">
                <p className="pname">{product.name}</p>
                <p className="pprice">{product.price} ฿ </p>
                <p className="pdetail">{product.detail}</p>
            </div>
        </main>
    );
}

export default ProductDetail;