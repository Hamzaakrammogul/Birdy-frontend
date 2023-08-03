import { React, useContext } from "react";
import "./Cart.scss";
import { MdClose } from 'react-icons/md';
import { BsCartX } from 'react-icons/bs';
import CartItem from './CartItem/CartItem';
import { Context } from "../../utils/context";
import {loadStripe} from '@stripe/stripe-js'
import { makePaymentRequest } from "../../utils/api";
const Cart = ({ cartHandler }) => {
    const ctx = useContext(Context);
    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISH_KEY);

    const handlePayment = async () =>{
       try
       { const stripe = await stripePromise;
        const res = await makePaymentRequest.post('api/orderes',{
            products: ctx.cartItems,
        });
        await stripe.redirectToCheckout({
            sessionId: res.data.stripeSession.id
        })}catch(error){
            console.log(error)
        }
    }

   

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
                {!ctx.cartItems.length && <div className="empty-card">
                    <BsCartX />
                    <span>No Products in the Cart</span>
                    <button className="return-cta">RETURN TO SHOP</button>
                </div>}

                {ctx.cartItems.length && <>   <CartItem />

                    <div className="cart-footer">
                        <div className="subtotal">
                            <span className="text">Subtotal</span>
                            <span className="total">&#36;{ctx.subTotal}</span>
                        </div>
                        <div className="button">
                            <button className="checkout-cta" onClick={handlePayment}>Checkout</button>
                        </div>
                    </div>
                </>}
            </div>
        </div>
    )
};

export default Cart;
