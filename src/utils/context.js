import { createContext, useState } from "react";

export const Context = createContext();

const AppContext = (props) => {

    const [categories, setCategories] = useState({data:[]});
    const [products, setProducts] = useState({data:[]});

    return (
        <Context.Provider value={{
            categories,
            setCategories,
            products,
            setProducts
        }}>
            {props.children}
        </Context.Provider>
    )
};

export default AppContext;