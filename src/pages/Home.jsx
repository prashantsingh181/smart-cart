import { useState } from "react";
import { useSelector } from "react-redux";
import { productsSelector } from "../redux/slices/products";
import PageHeading from "../components/PageHeading";
import Categories from "../components/Categories";
import ProductsGrid from "../components/ProductsGrid";
import { categoriesSelector } from "../redux/slices/categories";
import EmptyCart from "../components/EmptyCart";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const products = useSelector(productsSelector);
  const categories = useSelector(categoriesSelector);

  // getting filtered products according to category selected
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <>
      {products && products.length > 0 ? <><PageHeading heading="Our Products" />
        {categories && categories.length > 0 && <Categories
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />}
        <ProductsGrid products={filteredProducts} /></> : <EmptyCart text="No Products to display" buttonText="Reload Page" onClick={() => window.location.reload()} />}
    </>
  );
};

export default Home;
