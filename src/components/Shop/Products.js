import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Dummy_products = [
    {
        id: "p1",
        price: 6,
        title: "My First Book",
        description: "The first book I ever wrote",
    },
    {
        id: "p2",
        price: 5,
        title: "My Second Book",
        description: "The second book I ever wrote",
    },
    {
        id: "p3",
        price: 4,
        title: "My Third Book",
        description: "The third book I ever wrote",
    },
    {
        id: "p4",
        price: 3,
        title: "My forth Book",
        description: "The forth book I ever wrote",
    },
];

const Products = (props) => {
    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {Dummy_products.map((product) => (
                    <ProductItem
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        description={product.description}
                    />
                ))}
            </ul>
        </section>
    );
};

export default Products;
