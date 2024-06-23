import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { productsSelector, getProducts } from "../redux/slices/products";
import PageHeading from "../components/PageHeading";
import Categories from "../components/Categories";
import ProductsGrid from "../components/ProductsGrid";

const Home = () => {
    const dispatch = useDispatch();
    const products = useSelector(productsSelector);
    useEffect(() => {
        dispatch(getProducts());
    }, [])

    return (
        <>
            <PageHeading heading="Our Products" />
            <Categories />
            <ProductsGrid products={products} />
        </>
    )
}

export default Home