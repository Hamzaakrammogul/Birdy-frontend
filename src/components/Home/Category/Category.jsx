import React from "react";
import "./Category.scss";
import { useNavigate } from "react-router-dom";

const Category = (props) => {

    const navigate = useNavigate();

    return (
        <div className="shop-by-category">
            <div className="categories">
                {props.categories.data.map((item) => (

                    <div key={item.id} className="category" onClick={() => navigate(`/category/${item.id}`)}>
                        <img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data.attributes.url} alt="" />
                    </div>
                ))}

            </div>
        </div>
    )
};

export default Category;
