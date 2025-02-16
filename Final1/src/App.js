import './App.css';
import { useState } from 'react';
import products from './components/Data';
import ProductItem from './components/ProductItem';
import ProductDetail from './components/ProductDetail';
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";

function Header({ setSearchTerm, isSearchVisible, toggleSearch }) {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/"); // นำทางไปที่เส้นทางหน้าแรก
  };

  return (
    <header>
      <a href="#" onClick={goToHome} className="logo">Jewelry Parts</a>

      <div className="input-box">
        <input
          className={`input-bx ${isSearchVisible ? 'search-show' : ''}`}
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)} // จัดการคำค้นหา
        />
        <button className="btn-icon search" onClick={toggleSearch}>
          <i className="uil uil-search"></i>
        </button>
      </div>
    </header>
  );
}

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  // กรองสินค้าตามคำค้นหา
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) // ค้นหาจากชื่อสินค้า
  );

  return (
    <Router>
      <div className="App">
        <Header setSearchTerm={setSearchTerm} isSearchVisible={isSearchVisible} toggleSearch={toggleSearch} /> 

        <Routes>
          {/* เส้นทางสำหรับหน้าแรก */}
          <Route path="/" element={<ProductItem products={filteredProducts} isSearchVisible={isSearchVisible} />} />
          
          {/* เส้นทางสำหรับแสดงรายละเอียดสินค้า */}
          <Route path="/product/:id" element={<ProductDetail products={products} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
