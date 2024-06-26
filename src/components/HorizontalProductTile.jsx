import ProductQuantity from "./ProductQuantity";
import { RxCross2 } from "react-icons/rx";

const HorizontalProductTile = ({
  product,
  closeButton,
  closeFunctionality,
  incrementQuantity,
  decrementQuantity,
}) => {
  const totalPrice = (product.price * product.quantity).toFixed(2)
  return (
    <div className="flex flex-row gap-4 border border-slate-300 rounded p-4 relative">
      {closeButton && (
        <button
          className="absolute right-3 top-3 text-red-500"
          onClick={closeFunctionality}
        >
          <RxCross2 />
        </button>
      )}
      <div className="h-32 w-24 min-w-24 flex items-center">
        <img src={product.image} className="max-h-full max-w-full" />
      </div>
      <div className="flex flex-col lg:text-lg">
        <h3>{product.title}</h3>
        <ProductQuantity
          value={product.quantity}
          increment={incrementQuantity}
          decrement={decrementQuantity}
        />
        <span className="text-red-500 font-bold">{`${import.meta.env.VITE_CURRENCY || ""
          }${totalPrice}`}</span>
      </div>
    </div>
  );
};

export default HorizontalProductTile;
