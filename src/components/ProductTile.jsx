import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import Rating from "./Rating";
import { useDispatch } from "react-redux";
import { removeFromWishlist } from "../redux/slices/wishlist";
import { addItemToCart } from "../redux/slices/cart";
import { showSuccessPopup } from "../redux/slices/popup";

export default function ProductTile({ product, wishListItem, className }) {
  const dispatch = useDispatch();
  function handleClose(e) {
    e.preventDefault();
    dispatch(removeFromWishlist(product.id));
    dispatch(showSuccessPopup("Removed From Wishlist!"))
  }
  function handleMoveToCart() {
    dispatch(addItemToCart({ product, quantity: 1 }))
    dispatch(showSuccessPopup("Added to cart!"));
  }

  return (
    <div className={`p-2 bg-white text-black shadow-lg rounded-lg border border-slate-300 ${className ? className : ""} `}>
      <Link to={`/products/${product.id}`}>
        {/* image of product */}
        <div className="relative flex items-center justify-center">
          {wishListItem && (
            <button onClick={handleClose} className="text-red-500 absolute top-2 right-2 z-10 rounded-full p-1 bg-gray shadow bg-opacity-50 backdrop-blur-sm">
              <IoMdClose />
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
      {wishListItem && <button className="w-full text-center bg-white border border-slate-300 p-2" onClick={handleMoveToCart}>Move to cart</button>}
    </div>
  );
}
