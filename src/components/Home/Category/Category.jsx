import React from "react";
import "./Category.scss";
import cat1 from "../../../assets/category/png-clipart-letter-c-icon-letter-c-blue-text.png";
import cat2 from "../../../assets/category/png-clipart-letter-c-icon-letter-c-blue-text.png";
import cat3 from "../../../assets/category/png-clipart-letter-c-icon-letter-c-blue-text.png";
import cat4 from "../../../assets/category/png-clipart-letter-c-icon-letter-c-blue-text.png";

const Category = (props) => {

    return (
        <div className="shop-by-category">
            <div className="categories">
                {props.categories.data.map((item, index) => (

                    <div key={item.id} className="category">
                        <img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data.attributes.url} alt="" />

                    </div>

                ))}


            </div>
        </div>
    )
};

export default Category;
