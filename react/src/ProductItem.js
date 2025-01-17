import './App.css';

function ProductItem(props) {
    const { product } = props;
    return(
        <a href="" className="product-item" data-type={product.type}>
            <div className="product-image"><img src={product.image}/></div>
            <p className="product-name"> {product.name} </p>
            <p className="product-price"> {product.price} </p>
        </a>
    );
}

export default ProductItem;