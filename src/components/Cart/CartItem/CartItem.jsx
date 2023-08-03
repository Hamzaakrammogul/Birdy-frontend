import "./CartItem.scss";
import { useContext } from "react";
import { Context } from "../../../utils/context";
import { MdClose } from "react-icons/md";
const CartItem = () => {

    const ctx = useContext(Context);

    return (
        <div className="cart-products">

            {ctx.cartItems.map((item) => (
                <div key={item.id} className="cart-product">
                    <div className="img-container">
                        <img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data[0]?.attributes.url} alt="" />
                    </div>
                    <div className="prod-details">
                        <span className="prod-name">{item.attributes.title}</span>
                        <MdClose className="close-btn" onClick={() => {
                            ctx.removeItemHandler(item)
                        }} />
                        <div className="quantity-buttons">
                            <span onClick={() => {
                                ctx.quantityHandler('dec', item)
                            }}>-</span>
                            <span>
                                {item.attributes.quantity}
                            </span>
                            <span onClick={() => {
                                ctx.quantityHandler('Inc', item)
                            }}>+</span>
                        </div>
                        <div className="text">
                            <span> {item.attributes.quantity}</span>
                            <span>x</span>
                            <span className="highlight">&#36;{item.attributes.price * item.attributes.quantity}</span>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
};

export default CartItem;