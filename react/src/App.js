import './App.css';
import products from './components/Data';
import ProductItem from './components/ProductItem';
import ProductDetail from './components/ProductDetail';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
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
