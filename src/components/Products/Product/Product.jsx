import React from "react";
import "./Product.scss";
import productImg from '../../../assets/products/download.png'

const Product = () => {

    return (
    <div className="product-card">
        <div className="thumbnail">
            <img src={productImg} alt="" / >
        </div>
        <div className="product-details">
            <span className="name">Product name</span>
            <span className="price"> &#36;4.99</span>
        </div>
    </div>
    )
};

export default Product;
