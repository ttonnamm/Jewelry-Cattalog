import './ProductItem.css'
import React, { useState } from "react";
import { Link } from "react-router-dom";

function ProductItem({ products }) {
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
          setFilterC(false);
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

  // สร้างรายการสินค้าที่กรองแล้ว
  const ProductElements = filteredProducts.map((product) => {
    return (
      <Link to={`/product/${product.id}`} key={product.id} className="item" data-type={product.type} data-material={product.material}>
        <div className="image">
          <img src={product.image} alt={product.name} />
        </div>
        <p className="name">{product.name}</p>
        <p className="price">{product.price} ฿</p>
      </Link>
    );
  });

  return (
    <main className="main-0">
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
        <div className="product-grid">
            {ProductElements}
        </div>
    </main>
  );
}

export default ProductItem;
