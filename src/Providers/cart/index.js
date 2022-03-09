import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const productsCart =
            JSON.parse(localStorage.getItem("@Kenzieshop:cart")) || [];
        setCart(productsCart);
    }, []);

    const addToCart = (listProducts, productId) => {
        const product = listProducts.find(
            (currentProduct) => currentProduct.id === productId
        );
        setCart([...cart, product]);
        localStorage.setItem("@Kenzieshop:cart", JSON.stringify(cart));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
