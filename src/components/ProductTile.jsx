import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import Rating from "./Rating";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromWishlist,
  wishlistByIdSelector,
  wishlistToggle,
} from "../redux/slices/wishlist";
import { addItemToCart } from "../redux/slices/cart";
import { showSuccessPopup } from "../redux/slices/popup";

export default function ProductTile({
  product,
  wishlistItem,
  productPageItem,
  className,
}) {
  const dispatch = useDispatch();

  const isWishListed = Boolean(
    useSelector((state) => wishlistByIdSelector(state, product?.id))
  );
  const wishListIcon = isWishListed ? <FaHeart /> : <FaRegHeart />;

  // function to handle click of close button
  function handleClose(e) {
    e.preventDefault();
    dispatch(removeFromWishlist(product.id));
    dispatch(showSuccessPopup("Removed from wishlist!"));
  }

  // function to handle click of move to cart
  function handleMoveToCart() {
    dispatch(addItemToCart({ product, quantity: 1 }));
    dispatch(showSuccessPopup("Added to cart!"));
  }

  // function to handle click on heat icon
  function handleWishlistToggle(e) {
    e.preventDefault();
    dispatch(wishlistToggle(product));
    dispatch(
      showSuccessPopup(
        isWishListed ? "Removed From Wishlist!" : "Added to wishlist"
      )
    );
  }

  return (
    <div
      className={`p-2 bg-white text-black shadow-lg rounded-lg border border-slate-300 ${
        className ? className : ""
      }`}
    >
      <Link to={`/products/${product.id}`}>
        {/* image of product */}
        <div className="relative flex items-center justify-center">
          {wishlistItem && (
            <button
              onClick={handleClose}
              className="text-red-500 absolute top-2 right-2 z-10 rounded-full p-1 bg-gray shadow bg-opacity-50 backdrop-blur-sm"
            >
              <IoMdClose />
            </button>
          )}
          {productPageItem && (
            <button
              className="text-accent absolute top-2 right-2 z-10 text-3xl"
              onClick={handleWishlistToggle}
            >
              {wishListIcon}
            </button>
          )}
          <img
            src={product.image}
            alt="product"
            className="h-60 rounded-tr-lg rounded-tl-lg max-w-full max-h-full"
          ></img>
          {/* rating of product */}
          {product.rating && (
            <div className="absolute bottom-3 left-3 bg-gray shadow bg-opacity-50 backdrop-blur-sm p-1 rounded text-sm font-bold">
              <Rating rate={product.rating.rate} count={product.rating.count} />
            </div>
          )}
        </div>
        {/* product title and pricing */}
        <div className="p-3 flex flex-col gap-2">
          <h2 className="truncate" title={product.title}>
            {product.title}
          </h2>
          <div className="text-red-500 font-bold">
            <span>{import.meta.env.VITE_CURRENCY}</span>
            <span>{product.price}</span>
          </div>
        </div>
      </Link>
      {(wishlistItem || productPageItem) && (
        <button
          className="w-full text-center bg-white border border-slate-300 p-2"
          onClick={handleMoveToCart}
        >
          {wishlistItem ? "Move to cart" : "Add to cart"}
        </button>
      )}
    </div>
  );
}
