import React from "react";
import "./Product.scss";
import productImg from '../../../assets/products/download.png'

const Product = (props) => {

    return (
        <div className="product-card">
            <div className="thumbnail">
               {props.img}
            </div>
            <div className="product-details">
                <span className="name">{props.name}</span>
                <span className="price"> &#36;{props.price}</span>
            </div>
        </div>
    )
};

export default Product;
