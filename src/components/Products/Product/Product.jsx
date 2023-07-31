import React from "react";
import "./Product.scss";
import { useNavigate } from "react-router-dom";


const Product = (props) => {

    const navigate = useNavigate();

    return (
        <div className="product-card" onClick={()=> navigate("/product/"+ props.id)}>
            <div className="thumbnail" >
                {props.img}
            </div>
            <div className="product-details">
                <span className="name">{props.name}</span>
                <span className="price"> &#36;{props.price}</span>
            </div>
        </div>
    );
};

export default Product;