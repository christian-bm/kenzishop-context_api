import { ProductsProvider } from "../Providers/products";
import { CartProvider } from "../Providers/cart";

const Providers = ({ children }) => (
    <ProductsProvider>
        <CartProvider>{children}</CartProvider>
    </ProductsProvider>
);

export default Providers;
