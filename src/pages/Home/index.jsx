import Card from "../../components/Card";
import Header from "../../components/Header";

import { Container, Content } from "./styled";

import { useProducts } from "../../Providers/products";
import { useCart } from "../../Providers/cart";

const Home = () => {
    const { products } = useProducts();
    const { addToCart } = useCart();

    return (
        <>
            <Header />
            <Container>
                <Content>
                    {products.map((product) => (
                        <Card
                            key={product.id}
                            product={product}
                            onClick={(event) =>
                                addToCart(products, event.target.parentNode.id)
                            }
                        />
                    ))}
                </Content>
            </Container>
        </>
    );
};
export default Home;
