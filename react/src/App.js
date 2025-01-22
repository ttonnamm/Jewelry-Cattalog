import './App.css';
import React, { useState } from "react";
import ProductItem from './ProductItem';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./ProductDetail"; 

const products = [
    { 
        id: 1, //ProductItem line-> 10 | ProductDetail line-> 6, 7
        name: "Sakuma", //ProductItem line-> 12,14 | ProductDetail line-> 16,18
        type: "A", //ProductItem line-> 10 
        material: "silver", //ProductItem line-> 10
        image: "images/Sakuma.png", //ProductItem line-> 12 | ProductDetail line-> 16
        price: "21,000", //ProductItem line-> 15 | ProductDetail line-> 19
        detail: "qwertyuiopasdfghjklzxcvbnm," // ProductDetail line-> 20
    },
    {
        id: 2,
        name: "Test",
        type: "B",
        material: "gold",
        image: "images/testimg.jpg",
        price: "32,000",
        detail: "741852963789456123369258147"
    }
];

function App() {
    const [filterA, setFilterA] = useState(false);
    const [filterB, setFilterB] = useState(false);
    const [filterC, setFilterC] = useState(false);
    const [filterD, setFilterD] = useState(false);
    const [silver, setFiltersilver] = useState(false);
    const [gold, setFiltergold] = useState(false);

    const handleFilterChange = (filter) => {
        if (filter === 'A') {
            setFilterA(!filterA);
            setFilterB(false);
            setFilterC(false);
            setFilterD(false);
        } else if (filter === 'B') {
            setFilterB(!filterB);
            setFilterA(false);
            setFilterC(false);
            setFilterD(false);
        } else if (filter === 'C') {
            setFilterC(!filterC);
            setFilterA(false);
            setFilterB(false);
            setFilterD(false);
        } else if (filter === 'D') {
            setFilterD(!filterD);
            setFilterA(false);
            setFilterB(false);
            setFilterC(false)
        }
    };
    const handleFilterMaterial = (filter) => {
        if (filter === 'silver') {
            setFiltersilver(!silver);
            setFiltergold(false);
        } else if (filter === 'gold') {
            setFiltergold(!gold);
            setFiltersilver(false);
        } 
    };

    // กรองสินค้าเพื่อแสดงตามการเลือกประเภท
    const filteredProducts = products.filter((product) => {
        if (filterA) return product.type === 'A';
        if (filterB) return product.type === 'B';
        if (filterC) return product.type === 'C';
        if (filterD) return product.type === 'D';
        if (silver) return product.material === 'silver';
        if (gold) return product.material === 'gold';
        return true; // แสดงสินค้าทั้งหมดหากไม่ได้เลือกประเภทใดๆ
    });

    return (
        <div className="App">
            <aside>
                <h3>Categories</h3>
                <div className="checkbox-wrapper-42">
                    <input 
                        id="filterA" 
                        type="checkbox" 
                        checked={filterA} 
                        onChange={() => handleFilterChange('A')} 
                    />
                    <label className="cbx" htmlFor="filterA"></label>
                    <label className="lbl" htmlFor="filterA">A</label>
                </div>
                <div className="checkbox-wrapper-42">
                    <input 
                        id="filterB" 
                        type="checkbox" 
                        checked={filterB} 
                        onChange={() => handleFilterChange('B')} 
                    />
                    <label className="cbx" htmlFor="filterB"></label>
                    <label className="lbl" htmlFor="filterB">B</label>
                </div>
                <div className="checkbox-wrapper-42">
                    <input 
                        id="filterC" 
                        type="checkbox" 
                        checked={filterC} 
                        onChange={() => handleFilterChange('C')} 
                    />
                    <label className="cbx" htmlFor="filterC"></label>
                    <label className="lbl" htmlFor="filterC">C</label>
                </div>
                <div className="checkbox-wrapper-42">
                    <input 
                        id="filterD" 
                        type="checkbox" 
                        checked={filterD} 
                        onChange={() => handleFilterChange('D')} 
                    />
                    <label className="cbx" htmlFor="filterD"></label>
                    <label className="lbl" htmlFor="filterD">D</label>
                </div>
                <h3>Material</h3>
                <div className="checkbox-wrapper-42">
                    <input 
                        id="silver" 
                        type="checkbox" 
                        checked={silver} 
                        onChange={() => handleFilterMaterial('silver')} 
                    />
                    <label className="cbx" htmlFor="silver"></label>
                    <label className="lbl" htmlFor="silver">Silver</label>
                </div>
                <div className="checkbox-wrapper-42">
                    <input 
                        id="gold" 
                        type="checkbox" 
                        checked={gold} 
                        onChange={() => handleFilterMaterial('gold')} 
                    />
                    <label className="cbx" htmlFor="gold"></label>
                    <label className="lbl" htmlFor="gold">Gold</label>
                </div>
            </aside>
            
            <main>
                <div>
                    <div className="visibility">
                        <div class="product-image"></div>
                        <p class="product-name"> </p>
                        <p class="product-price"> </p>
                    </div>
                    <div className="visibility">
                        <div class="product-image"></div>
                        <p class="product-name"> </p>
                        <p class="product-price"> </p>
                    </div>
                    <div className="visibility">
                        <div class="product-image"></div>
                        <p class="product-name"> </p>
                        <p class="product-price"> </p>
                    </div>
                    <div className="visibility">
                        <div class="product-image"></div>
                        <p class="product-name"> </p>
                        <p class="product-price"> </p>
                    </div>
                </div>
                <Router>
                    <Routes>
                        <Route path="/" element={<ProductItem products={filteredProducts} />} />
                        <Route path="/product/:id" element={<ProductDetail products={products} />} />
                    </Routes>
                </Router>
            </main>
        </div>
    );
}

export default App;
