import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  productByIdSelector,
  productsByCategorySelector,
} from "../redux/slices/products";
import { wishlistByIdSelector, wishlistToggle } from "../redux/slices/wishlist";
import { showSuccessPopup } from "../redux/slices/popup";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import Rating from "../components/Rating";
import ProductListRow from "../components/ProductListRow";
import { addItemToCart } from "../redux/slices/cart";
import ProductQuantity from "../components/ProductQuantity";
import PageHeading from "../components/PageHeading";
import EmptyCart from "../components/EmptyCart";

const ProductDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // getting productId from URL and getting corresponding product details from redux store
  const { productId } = useParams();
  const product = useSelector((state) =>
    productByIdSelector(state, Number(productId))
  );

  // extracting category of product and getting similar items in that category
  const category = product && product.category;
  const similarCategoryProducts = useSelector((state) =>
    productsByCategorySelector(state, category)
  );
  const age = product.age.yes;
  const otherItems = similarCategoryProducts.filter(
    (item) => product.id !== item.id
  );

  const isWishListed = Boolean(
    useSelector((state) => wishlistByIdSelector(state, product?.id))
  );

  // local state for quantity
  const [count, setCount] = useState(1);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }
  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  function addingItemToCart() {
    dispatch(addItemToCart({ product, quantity: count }));
    dispatch(showSuccessPopup("Added to cart!"));
    setCount(1);
  }
  return product ? (
    <>
      <PageHeading heading="Product Details" />
      <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-2">
        <section className="h-96 flex justify-center items-center">
          <img
            src={product.image}
            alt={product.title}
            className="rounded max-h-full max-w-full"
          />
        </section>
        <section className="flex flex-col gap-4 px-4">
          <h2 className="text-2xl">{product.title}</h2>
          <div className="bg-gray shadow bg-opacity-50 backdrop-blur-sm p-1 rounded font-bold self-start">
            <Rating rate={product.rating.rate} count={product.rating.count} />
          </div>
          <hr className="text-slate-300" />
          <div className="flex flex-col">
            <span className="font-bold text-red-500 text-xl">
              {import.meta.env.VITE_CURRENCY}
              {product.price}
            </span>
            <span>inclusive of all taxes</span>
          </div>
          {/* Quantity for product */}
          <ProductQuantity
            value={count}
            increment={increment}
            decrement={decrement}
          />
          {/* cart and wishlist button */}
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
            <button
              className="primary-button flex gap-2 items-center justify-center"
              onClick={addingItemToCart}
            >
              <AiOutlineShoppingCart className="text-xl" />
              <span>ADD TO CART</span>
            </button>
            <button
              className={`secondary-button ${
                isWishListed ? "bg-slate-300" : "bg-white"
              } flex gap-2 items-center justify-center`}
              onClick={() => {
                dispatch(wishlistToggle(product));
                dispatch(
                  showSuccessPopup(
                    `${isWishListed ? "Removed from" : "Added to"} Wishlist!`
                  )
                );
              }}
            >
              {isWishListed ? (
                <FaHeart className="text-xl" />
              ) : (
                <FaRegHeart className="text-xl" />
              )}
              <span>{isWishListed ? "WISHLISTED" : "WISHLIST"}</span>
            </button>
          </div>
          <hr className="text-slate-300" />
          {/* product description */}
          <div>
            <h3 className="text-xl font-bold">Description</h3>
            <p className="py-2">{product.description}</p>
          </div>
        </section>
      </div>
      <hr className="my-8 text-slate-300" />
      {/* similar items */}
      {category && (
        <section className="flex flex-col gap-4 my-4">
          <h3 className="text-xl font-bold">See more in {category}</h3>
          <ProductListRow products={otherItems} />
        </section>
      )}
    </>
  ) : (
    <EmptyCart text="Cannot display product now. Please try later!" buttonText="Go to Home Page" onClick={() => navigate("/")} />
  );
};

export default ProductDetails;
