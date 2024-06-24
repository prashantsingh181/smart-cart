import { useSelector } from "react-redux";
import { wishlistSelector } from "../redux/slices/wishlist";
import PageHeading from "../components/PageHeading";
import ProductsGrid from "../components/ProductsGrid";

const Wishlist = () => {
  const wishlistProducts = useSelector(wishlistSelector);
  return (
    <>
      <PageHeading heading="Wishlist Products" />
      {wishlistProducts && wishlistProducts.length > 0 ? <ProductsGrid products={wishlistProducts} /> : <p>Wishlist Empty!</p>}
    </>
  );
};

export default Wishlist;
