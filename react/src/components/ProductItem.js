import './ProductItem.css';
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ products }) => {
    // State for category filters
    const [filters, setFilters] = useState({
        A: false,
        B: false,
        C: false,
        D: false,
        silver: false,
        gold: false,
    });

    // State for showing/hiding navigation and filters
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [isFilterVisible, setIsFilterVisible] = useState(false);

    /// Toggle navigation menu and ensure filter is closed
    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
        if (!isMenuVisible) {
            setIsFilterVisible(false); // Close filter if menu is opened
        }
    };

    // Toggle filter aside and ensure menu is closed
    const toggleFilter = () => {
        setIsFilterVisible(!isFilterVisible);
        if (!isFilterVisible) {
            setIsMenuVisible(false); // Close menu if filter is opened
        }
    };
    // Handle category and material filters
    const handleFilterChange = (filter) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [filter]: !prevFilters[filter]
        }));
    };

    // Filter products based on selected filters
    const filteredProducts = products.filter(product => {
        const matchesType = (
            (!filters.A && !filters.B && !filters.C && !filters.D) || 
            (filters.A && product.type === 'A') ||
            (filters.B && product.type === 'B') ||
            (filters.C && product.type === 'C') ||
            (filters.D && product.type === 'D')
        );

        const matchesMaterial = (
            (!filters.silver && !filters.gold) ||
            (filters.silver && product.material === 'silver') ||
            (filters.gold && product.material === 'gold')
        );

        return matchesType && matchesMaterial;
    });

    // Render product elements
    const productElements = filteredProducts.length ? (
        filteredProducts.map(product => (
            <Link
                to={`/product/${product.id}`}
                key={product.id}
                className="item"
                data-type={product.type}
                data-material={product.material}
            >
                <div className="image">
                    <img src={product.image} alt={product.name} />
                </div>
                <p className="name">{product.name}</p>
                <p className="price">{product.price} ฿</p>
            </Link>
        ))
    ) : (
        <p className="no-products">No products found based on the selected filters.</p>
    );

    return (
        <div>
            <nav>
                <div className="left-icons">
                    <button className="nav_toggle btn-icon" id="nav-toggle" onClick={toggleMenu}>
                        <i className='bx bx-menu'></i>
                    </button>
                    <button className="filter_toggle btn-icon" id="filter-toggle" onClick={toggleFilter}>
                        <i className='bx bx-plus'></i>
                    </button>
                </div>
                <div className={`nav_Item ${isMenuVisible ? 'show' : ''}`} id="nav-Item">
                    <a href="#home" className="manage nav-btn">Home</a><br /><br />
                    <a href="#type1" className="manage nav-btn">Type1</a><br /><br />
                    <a href="#type2" className="manage nav-btn">Type2</a><br /><br />
                    <a href="#type3" className="manage nav-btn">Type3</a><br /><br />
                    <a href="#collections" className="manage nav-btn">Collections</a><br /><br />
                    <a href="#contactus" className="manage nav-btn">Contact Us</a><br /><br />
                    <h1 className='com'>All Products</h1>
                </div>
            </nav>

            <main className="main-0">
                <aside className={`filter-aside ${isFilterVisible ? 'show' : ''}`} id="filter-aside">
                    <h3>Categories</h3>
                    {['A', 'B', 'C', 'D'].map(type => (
                        <div className="checkbox-wrapper-42" key={type}>
                            <input
                                id={`filter${type}`}
                                type="checkbox"
                                checked={filters[type]}
                                onChange={() => handleFilterChange(type)}
                            />
                            <label className="cbx" htmlFor={`filter${type}`}></label>
                            <label className="lbl" htmlFor={`filter${type}`}>{type}</label>
                        </div>
                    ))}

                    <h3>Material</h3>
                    {['silver', 'gold'].map(material => (
                        <div className="checkbox-wrapper-42" key={material}>
                            <input
                                id={material}
                                type="checkbox"
                                checked={filters[material]}
                                onChange={() => handleFilterChange(material)}
                            />
                            <label className="cbx" htmlFor={material}></label>
                            <label className="lbl" htmlFor={material}>{material.charAt(0).toUpperCase() + material.slice(1)}</label>
                        </div>
                    ))}
                </aside>
                
                <h1 className='phone'>All Products</h1>
                <div className="product-grid">
                    {productElements}
                </div>
            </main>
        </div>
    );
};

export default ProductItem;
