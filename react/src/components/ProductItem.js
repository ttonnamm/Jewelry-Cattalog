import './ProductItem.css';
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ products }) => {
    const [filterA, setFilterA] = useState(false);
    const [filterB, setFilterB] = useState(false);
    const [filterC, setFilterC] = useState(false);
    const [filterD, setFilterD] = useState(false);
    const [silver, setFilterSilver] = useState(false);
    const [gold, setFilterGold] = useState(false);
    const [menuShown, setMenuShown] = useState(false);

    // Toggle navigation menu with React state
    const toggleMenu = () => setMenuShown(!menuShown);

    // Use effect for handling menu show/hide logic
    useEffect(() => {
        const nav = document.getElementById('nav-Item');
        const toggle = document.getElementById('nav-toggle');
        if (nav && toggle) {
            nav.classList.toggle('show', menuShown);
            toggle.setAttribute('aria-expanded', menuShown);
        }
    }, [menuShown]);

    const handleFilterChange = (filter) => {
        setFilterA(filter === 'A');
        setFilterB(filter === 'B');
        setFilterC(filter === 'C');
        setFilterD(filter === 'D');
    };

    const handleFilterMaterial = (filter) => {
        setFilterSilver(filter === 'silver');
        setFilterGold(filter === 'gold');
    };

    // Filter products based on selected filters
    const filteredProducts = products.filter((product) => {
        if (filterA) return product.type === 'A';
        if (filterB) return product.type === 'B';
        if (filterC) return product.type === 'C';
        if (filterD) return product.type === 'D';
        if (silver) return product.material === 'silver';
        if (gold) return product.material === 'gold';
        return true; // Show all products if no filter is selected
    });

    // Create product list elements
    const ProductElements = filteredProducts.length ? (
        filteredProducts.map((product) => (
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
                    <button className="nav_toggle" id="nav-toggle" onClick={toggleMenu}>
                        <i className='bx bx-menu'></i>
                    </button>
                    <button className="filter_toggle">
                        <i className='bx bx-plus'></i>
                    </button>
                </div>
                <div className={`nav_Item ${menuShown ? 'show' : ''}`} id="nav-Item">
                    <a href="#home" className="nav_link manage">Home</a><br /><br />
                    <a href="#type1" className="nav_link manage">Type1</a><br /><br />
                    <a href="#type2" className="nav_link manage">Type2</a><br /><br />
                    <a href="#type3" className="nav_link manage">Type3</a><br /><br />
                    <a href="#collections" className="nav_link manage">Collections</a><br /><br />
                    <a href="#contactus" className="nav_link manage">Contact Us</a><br /><br />
                </div>

                <h1>All Products</h1>
            </nav>

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
        </div>
    );
};

export default ProductItem;
