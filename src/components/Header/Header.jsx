
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
    const [showSearch, setShowSearch] = useState(false);
    const navigate = useNavigate();


    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 100) {
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
                        <li onClick={()=> navigate('/')}>Home</li>
                        <li>About</li>
                        <li>Categories</li>
                    </ul>

                    <div onClick={()=> navigate('/')} className="center">BIRDY</div>
                    <div className="right">
                        <TbSearch onClick={() => {
                            setShowSearch(true)
                        }} />
                        <AiOutlineHeart />
                        <span className="cart-icon">
                            <CgShoppingCart onClick={() => { setShowCart(true) }} />
                            <span>5</span>
                        </span>
                    </div>
                </div>
            </header>
            {showCart && <Cart cartHandler={setShowCart} />}
            {showSearch && <Search searchHandler={setShowSearch} />}
        </Fragment>
    );
};

export default Header;
