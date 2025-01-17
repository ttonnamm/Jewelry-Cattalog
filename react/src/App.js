import './App.css';
import ProductItem from './ProductItem.js';
import { useState } from 'react';

const products = [
    {
        id: 1,
        name:"Sakuma",
        type:"A",
        image:"Sakuma.png",
        price:"21,000"
    },
    {
        id: 2,
        name:"Test",
        type:"B",
        image:"testimg.jpg",
        price:"32,000"
    }
]

function App() {
    const [filterA, setFilterA] = useState(false);
    const [filterB, setFilterB] = useState(false);
    const [filterC, setFilterC] = useState(false);

    const handleFilterChange = (filter) => {
        if (filter === 'A') {
            setFilterA(!filterA);
            setFilterB(false);
            setFilterC(false);
            
        } else if (filter === 'B') {
            setFilterB(!filterB);
            setFilterA(false);
            setFilterC(false);
            
        } else if (filter === 'C') {
            setFilterC(!filterC);
            setFilterA(false);
            setFilterB(false);
            
        }
    };

    // กรองสินค้าเพื่อแสดงตามการเลือกประเภท
    const filteredProducts = products.filter((product) => {
        if (filterA) return product.type === 'A';
        if (filterB) return product.type === 'B';
        if (filterC) return product.type === 'C';
        return true; // แสดงสินค้าทั้งหมดหากไม่ได้เลือกประเภทใดๆ
    });

    // แสดงรายการสินค้าโดยการกรอง
    const productElements = filteredProducts.map((product, index) => (
        <ProductItem key={index} product={product} />
    ));
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
            </aside>
            <main>
                <div>
                    <div className="visibility">
                        <div className="product-image"></div>
                        <p className="product-name"> </p>
                        <p className="product-price"> </p>
                    </div>
                    <div className="visibility">
                        <div className="product-image"></div>
                        <p className="product-name"> </p>
                        <p className="product-price"> </p>
                    </div>
                    <div className="visibility">
                        <div className="product-image"></div>
                        <p className="product-name"> </p>
                        <p className="product-price"> </p>
                    </div>
                    <div className="visibility">
                        <div className="product-image"></div>
                        <p className="product-name"> </p>
                        <p className="product-price"> </p>
                    </div>
                </div>
                <div className="product-grid">
                    {productElements}
                </div>
            </main>
        </div>
    );
}

export default App;
