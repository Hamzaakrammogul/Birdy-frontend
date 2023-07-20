
import { useEffect, useState, useContext, Fragment } from "react";
import { useNavigate } from "react-router-dom";

import { TbSearch } from 'react-icons/tb';
import { CgShoppingCart } from 'react-icons/cg';
import { AiOutlineHeart } from 'react-icons/ai';

import Search from './Search/Search';
import Cart from './../Cart/Cart';
import { Context } from "../../utils/context";

import "./Header.scss";

const Header = () => {

    const [scroll, setScroll] = useState(false);
    const [showCart, setShowCart] = useState(false);

    const showCartHandler = () => {

        if(showCart === false){
            setShowCart(true);
        }else{
            setShowCart(false);
        }
    }


    const handleScroll = () => {
        const offset = window.scrollY;
        console.log(offset)
        if (offset > 200) {
            setScroll(true);
        } else {
            setScroll(false)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    }, []);
    return (
        <Fragment>
            <header className={`main-header ${scroll ? 'sticky-header' : ''}`}>
                <div className="header-content">
                    <ul className="left">
                        <li>Home</li>
                        <li>About</li>
                        <li>Categories</li>
                    </ul>

                    <div className="center">BIRDY</div>
                    <div className="right">
                        <TbSearch />
                        <AiOutlineHeart />
                        <span className="cart-icon">
                            <CgShoppingCart onClick={showCartHandler}/>
                            <span>5</span>
                        </span>
                    </div>
                </div>
            </header>
            {showCart && <Cart  cartHandler={showCartHandler}/>}
        </Fragment>
    )
};

export default Header;
 