import PageHeading from "../components/PageHeading";
import CartPriceInfo from "../components/CartPriceInfo";
import {
  cartSelector,
  decrementQuantity,
  incrementQuantity,
  removeItemFromCart,
} from "../redux/slices/cart";
import { productsSelector } from "../redux/slices/products";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import HorizontalProductTile from "../components/HorizontalProductTile";
import ProductListRow from "../components/ProductListRow";
import EmptyCart from "../components/EmptyCart";
import { showSuccessPopup } from "../redux/slices/popup";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartProducts = useSelector(cartSelector);
  const products = useSelector(productsSelector);
  const otherItems = products.filter(
    (product) =>
      !cartProducts.find((cartProduct) => product.id === cartProduct.id)
  );
  return (
    <>
      {cartProducts && cartProducts.length > 0 ? (
        <>
          <PageHeading heading="Cart" />
          <section className="grid grid-flow-row grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-10 lg:mx-28 xl:mx-40 2xl:mx-60 py-4">
            <div className="flex flex-col gap-4 md:col-span-2 lg:col-span-1">
              {cartProducts.map((product) => (
                <HorizontalProductTile
                  key={product.id}
                  product={product}
                  closeButton
                  closeFunctionality={() => {
                    dispatch(removeItemFromCart(product.id));
                    dispatch(showSuccessPopup("Removed from cart!"));
                  }}
                  incrementQuantity={() =>
                    dispatch(incrementQuantity(product.id))
                  }
                  decrementQuantity={() =>
                    dispatch(decrementQuantity(product.id))
                  }
                />
              ))}
            </div>
            <CartPriceInfo products={cartProducts} />
          </section>
          <hr className="text-slate-300" />
          <section className="flex flex-col gap-6 my-6">
            <h3 className="font-bold text-lg font-inter">Our other products</h3>
            <ProductListRow products={otherItems} />
          </section>
        </>
      ) : (
        <EmptyCart
          text="There is nothing in your cart. Lets add some items."
          buttonText="Add from Wishlist"
          onClick={() => navigate("/wishlist")}
        />
      )}
    </>
  );
};

export default Cart;
