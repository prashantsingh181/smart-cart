import { useState } from "react";
import { useSelector } from "react-redux";
import { productsSelector } from "../redux/slices/products";
import PageHeading from "../components/PageHeading";
import Categories from "../components/Categories";
import ProductsGrid from "../components/ProductsGrid";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const products = useSelector(productsSelector);

  // getting filtered products according to category selected
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <>
      <PageHeading heading="Our Products" />
      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ProductsGrid products={filteredProducts} />
    </>
  );
};

export default Home;
