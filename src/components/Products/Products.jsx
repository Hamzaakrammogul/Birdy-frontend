import React from "react";
import "./Products.scss";
import Product from '../Products/Product/Product';
const Products = (props) => {
    return (
        <div className="products-container">
            {!props.innerPage && <div className="sec-heading">{props.headingText}</div>}
            <div className="products">
                {props.products.data.map((item, index) => (
                    <Product
                        key={item.id}
                        img={<img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data[0].attributes.url} alt="" />}
                        name={item.attributes.title}
                        price={item.attributes.price}
                    />
                ))}

            </div>
        </div>
    )
};

export default Products;
