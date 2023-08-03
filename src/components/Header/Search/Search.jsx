import "./Search.scss";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import useFetch from '../../../hooks/useFetch';
const Search = ({ searchHandler }) => {

    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const onChangeHandler = (event) => {
        setQuery(event.target.value);
    };

    let { data } = useFetch(`/api/products?populate=*&[filters][title][$contains]=${query} `)
    if (!query.length) {
        data = null;
    }

    return (
        <div className="search-modal">
            <div className="form-field">
                <input
                    type="text"
                    autoFocus
                    placeholder="Search"
                    value={query}
                    onChange={onChangeHandler}
                />

                <MdClose size={18} className="close-button" onClick={() => {
                    searchHandler(false);
                }} />
            </div>
            <div className="search-result-content">
                <div className="search-results">
                    {data?.data.map((item) => (
                        <div key={item.id} className="search-result-item" onClick={()=>{
                            navigate('/product/' + item.id)
                            searchHandler(false);
                        }}>
                            <div className="img-container">
                                <img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data[0].attributes.url} alt="" />
                            </div>
                            <div className="prod-details">
                                <span className="prod-name">{item.attributes.title}</span>
                                <span className="prod-desc">{item.attributes.description}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Search;
