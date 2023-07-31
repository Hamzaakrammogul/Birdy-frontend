import { React, useState } from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
} from 'react-icons/fa';
import "./SingleProduct.scss";
import RelatedProducts from './RelatedProducts/RelatedProducts';
import { useParams } from "react-router-dom";
import useFetch from '../../hooks/useFetch';


const SingleProduct = () => {

    const [counter, setCounter] = useState(1);

    const { id } = useParams();
    const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);

    const increment = () => {
        setCounter(counter + 1);
    };

    const decrement = () => {
        if (counter === 1) {
            return;
        }
        setCounter(counter - 1);
    };

    return (
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <img src={process.env.REACT_APP_DEV_URL + data.data[0]?.attributes.img.data[0]?.attributes.url} alt="" />
                    </div>
                    <div className="right">
                        <span className="name">{data.data[0]?.attributes.title}</span>
                        <span className="price">&#36;{data.data[0]?.attributes.price}</span>
                        <span className="desc">{data.data[0]?.attributes.description}</span>
                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span onClick={decrement}>-</span>
                                <span>{counter}</span>
                                <span onClick={increment}>+</span>
                            </div>
                            <button className="add-to-cart-btn">
                                <FaCartPlus size={20} />
                                <p> ADD TO CART</p>
                            </button>
                        </div>
                        <span className="divider" />
                        <div className="info-item">
                            <span className="text-bold" >
                                Category:
                                <span>{data.data[0]?.attributes.categories.data[0].attributes.title}</span>
                            </span>
                            <span className="text-bold" >
                                Share:
                                <span className="social-icons">
                                    <FaFacebookF size={16} />
                                    <FaTwitter size={16} />
                                    <FaInstagram size={16} />
                                    <FaLinkedinIn size={16} />
                                    <FaPinterest size={16} />
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <RelatedProducts productId={id} categoryId={data.data[0]?.attributes.categories.data[0].id} />
            </div>
        </div>
    )
};

export default SingleProduct;
