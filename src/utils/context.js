import { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext();

const AppContext = (props) => {

    const [categories, setCategories] = useState({ data: [] });
    const [products, setProducts] = useState({ data: [] });
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [subTotal, setSubTotal] = useState(0);
    const location = useLocation();


    useEffect(()=>{
        window.scrollTo(0,0)
    },[location]);

    useEffect(()=>{
        let count = 0;
        cartItems.map((item)=> count  += item.attributes.quantity);
        setCartCount(count);
        
        let total = 0;
        cartItems.map(item => total += item.attributes.price * item.attributes.quantity);
        setSubTotal(total);
    }, [cartItems]);

    const addItemHandler = (product, quantity) => {
        let items = [...cartItems];
        let index = items.findIndex(p => p.id === product.id);
        if (index !== -1) {
            items[index].attributes.quantity += quantity
        } else {
            product.attributes.quantity = quantity;
            items = [...items, product];
        }
        setCartItems(items);

    };

    const removeItemHandler = (product) => {
        let items = [...cartItems];
        items = items.filter((p) => p.id !== product.id);
        setCartItems(items);
    };

    const quantityHandler = (type, product) => {
        let items = [...cartItems];
        let index = items.findIndex(p => p.id === product.id);

        if (type === 'Inc') {
            items[index].attributes.quantity += 1;

        } else if (type === 'dec') {
            if (items[index].attributes.quantity === 1) {
                return;
            }
            items[index].attributes.quantity -= 1;
        }
        setCartItems(items);

    };

    return (
        <Context.Provider value={{
            categories,
            setCategories,
            products,
            setProducts,
            cartItems,
            setCartItems,
            cartCount,
            setCartCount,
            subTotal,
            setSubTotal,
            addItemHandler,
            removeItemHandler,
            quantityHandler
        }}>
            {props.children}
        </Context.Provider>
    )
};

export default AppContext;