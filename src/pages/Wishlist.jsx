import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { wishlistSelector } from "../redux/slices/wishlist";
import PageHeading from "../components/PageHeading";
import ProductsGrid from "../components/ProductsGrid";
import EmptyCart from "../components/EmptyCart";

const Wishlist = () => {
  const wishlistProducts = useSelector(wishlistSelector);
  const navigate = useNavigate();
  return (
    <div className="centered-container bg-secondary-background p-6">
      {wishlistProducts && wishlistProducts.length > 0 ? <>
        <PageHeading heading="Wishlist Products" />
        <ProductsGrid products={wishlistProducts} wishlistItem />
      </> : <EmptyCart text="Your wishlist is empty. Let's add some items from products." onClick={() => navigate("/products")} buttonText="Add from Products" />}
    </div>
  );
};

export default Wishlist;
