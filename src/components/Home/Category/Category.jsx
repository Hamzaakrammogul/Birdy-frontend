import React from "react";
import "./Category.scss";
import cat1 from "../../../assets/category/png-clipart-letter-c-icon-letter-c-blue-text.png";
import cat2 from "../../../assets/category/png-clipart-letter-c-icon-letter-c-blue-text.png";
import cat3 from "../../../assets/category/png-clipart-letter-c-icon-letter-c-blue-text.png";
import cat4 from "../../../assets/category/png-clipart-letter-c-icon-letter-c-blue-text.png";

const Category = () => {

    return (
        <div className="shop-by-category">
            <div className="categories">

                <div className="category">
                    <img src={cat1} alt="" />
                </div>
                <div className="category">
                    <img src={cat2} alt="" />
                </div>
                <div className="category">
                    <img src={cat3} alt="" />
                </div>
                <div className="category">
                    <img src={cat4} alt="" />
                </div>
            </div>
        </div>
    )
};

export default Category;
