import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import Rating from "./Rating";
import { useDispatch } from "react-redux";
import { removeFromWishlist } from "../redux/slices/wishlist";

export function ProductTile({ product, wishListItem }) {
  const dispatch = useDispatch();
  function handleClose(e) {
    e.stopPropagation();
    dispatch(removeFromWishlist(product.id));
  }

  return (
    <Link to={`/products/${product.id}`}>
      {/* image of product */}
      <div className="h-3/4 relative flex items-center justify-center">
        {wishListItem && (
          <button onClick={handleClose}>
            <IoMdClose className="text-red-500 absolute top-4 right-4 z-10" />
          </button>
        )}
        <img
          src={product.image}
          alt="product"
          className="rounded-tr-lg rounded-tl-lg max-w-full max-h-full"
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
  );
}
