import "./Search.scss";
import { MdClose } from "react-icons/md";
import prod from '../../../assets/products/download.png';
const Search = ({ searchHandler }) => {
    return (
        <div className="search-modal">
            <div className="form-field">
                <input
                    type="text"
                    autoFocus
                    placeholder="Search"
                />

                <MdClose size={18} className="close-button" onClick={() => {
                    searchHandler(false);
                }} />
            </div>
            <div className="search-result-content">
                <div className="search-results">
                    <div className="search-result-item"> 
                        <div className="img-container">
                            <img src={prod} alt="" />
                        </div>
                        <div className="prod-details">
                            <span className="prod-name">Product name</span>
                            <span className="prod-desc">Product description</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Search;
