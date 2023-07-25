import React from "react";
import "./Cart.scss";
import { MdClose } from 'react-icons/md';
import { BsCartX } from 'react-icons/bs';
import CartItem from './CartItem/CartItem';
const Cart = ({ cartHandler }) => {
    return (
        <div className="cart-panel">
            <div className="opac-layer" onClick={() => {
                cartHandler(false)
            }}></div>
            <div className="cart-content">
                <div className="cart-header">
                    <span className="heading"> Shopping Cart</span>
                    <span className="close-btn" onClick={() => {
                        cartHandler(false)
                    }} >
                        <MdClose size={18} />
                        <span className="text">close</span>
                    </span>

                </div>
                {/* <div className="empty-card">
                    <BsCartX />
                    <span>No Products in the Cart</span>
                    <button className="return-cta">RETURN TO SHOP</button>
                </div> */}
                <CartItem />

                <div className="cart-footer">
                    <div className="subtotal">
                        <span className="text">Subtotal</span>
                        <span className="total">&#36;10.00</span>
                    </div>
                    <div className="button">
                        <button className="checkout-cta">Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Cart;
