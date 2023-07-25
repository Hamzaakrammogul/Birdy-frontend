import "./CartItem.scss";
import { MdClose } from "react-icons/md";
import prodImg from "../../../assets/products/download.png"
const CartItem = () => {
    return (
        <div className="cart-products">
            <div className="cart-product">
                <div className="img-container">
                    <img src={prodImg} alt="" />
                </div>
                <div className="prod-details">
                    <span className="prod-name">Product name</span>
                    <MdClose className="close-btn" />
                    <div className="quantity-buttons">
                        <span>-</span>
                        <span>5</span>
                        <span>+</span>
                    </div>
                    <div className="text">
                        <span>3</span>
                        <span>x</span>
                        <span className="highlight">&#36;10.00</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CartItem;