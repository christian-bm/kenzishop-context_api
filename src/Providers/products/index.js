import { createContext, useState, useContext } from "react";
import ProductsDB from "../../assets/db";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [products] = useState(ProductsDB);

    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    );
};

export const useProducts = () => useContext(ProductsContext);
