import React from "react";
import "./Footer.scss";
import {
    FaLocationArrow,
    FaMobileAlt,
    FaEnvelope,
} from 'react-icons/fa';
import Payment from '../../assets/payments.png';

const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="column">
                    <div className="title">About</div>
                    <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident in ex, optio fugit quos possimus voluptatum eius iusto
                        voluptates quod explicabo quam velit mollitia. Odio aut eos id inventore necessitatibus!</div>
                </div>
                <div className="column">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            Gulberg III, Galib Market, Kickstart
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">
                            +923200454092
                        </div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">
                            hamzaisheree@gmail.com
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="title">Categories</div>
                    <span className="text">Headphones</span>
                    <span className="text">Smart Watches</span>
                    <span className="text">Bluetooth Speakers</span>
                    <span className="text">Wireless Earbuds</span>
                    <span className="text">Home Theatre</span>
                    <span className="text">Projectors</span>

                </div>
                <div className="column">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>

                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                        BIRDY 2023 CREATED BY HAMZA. PREMIUM E-COMMERCE SOLUTIONS.
                    </div>
                    <img src={Payment} alt="" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
