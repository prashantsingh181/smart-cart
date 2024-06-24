import PageHeading from "../components/PageHeading";
import CartPriceInfo from "../components/CartPriceInfo";
import {
  cartSelector,
  incrementQuantity,
  removeItemFromCart,
} from "../redux/slices/cart";
import { useSelector } from "react-redux";
import HorizontalProductTile from "../components/HorizontalProductTile";
import { useDispatch } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector(cartSelector);
  return (
    <>
      <PageHeading heading="Cart" />
      {cartProducts && cartProducts.length > 0 ? (
        <section className="grid grid-flow-row grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-4">
            {cartProducts.map((product) => (
              <HorizontalProductTile
                key={product.id}
                product={product}
                closeButton
                closeFunctionality={() =>
                  dispatch(removeItemFromCart(product.id))
                }
                incrementQuantity={() => dispatch(incrementQuantity())}
                decrementQuantity={() => dispatch(incrementQuantity())}
              />
            ))}
          </div>
          <CartPriceInfo products={cartProducts} />
        </section>
      ) : (
        "No items in cart!"
      )}
    </>
  );
};

export default Cart;
