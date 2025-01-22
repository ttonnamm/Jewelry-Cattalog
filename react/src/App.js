import './App.css';
import products from './components/Data';
import ProductItem from './components/ProductItem';
import ProductDetail from './components/ProductDetail';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <div className="nav_menu" id="nav-menu">
            <a href="#home" className="nav_link active">Home</a>
            <a href="#type1" className="nav_link">Type1</a>
            <a href="#type2" className="nav_link">Type2</a>
            <a href="#type3" className="nav_link">Type3</a>
            <a href="#collections" className="nav_link">Collections</a>
            <a href="#contactus" className="nav_link">Contact Us</a>
          </div>
        </nav>

        <Routes>
          {/* เส้นทางสำหรับหน้าแรก */}
          <Route path="/" element={<ProductItem products={products} />} />
          
          {/* เส้นทางสำหรับแสดงรายละเอียดสินค้า */}
          <Route path="/product/:id" element={<ProductDetail products={products} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
