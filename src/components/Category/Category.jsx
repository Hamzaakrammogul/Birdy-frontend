import React from "react";
import "./Category.scss";
import cat1 from "../../assets/category/cat-1.jpg";

const Category = () => {

    return (
        <div className="shop-by-category">
            <div className="categories">
                <img src={cat1} alt="" />
            </div>
            <div className="categories">
                <img src={cat1} alt="" />
            </div>
            <div className="categories">
                <img src={cat1} alt="" />
            </div>
            <div className="categories">
                <img src={cat1} alt="" />
            </div>
        </div>
    )
};

export default Category;
 