import { GrSubtractCircle, GrAddCircle } from "react-icons/gr";

const ProductQuantity = ({ value, increment, decrement }) => {
  return (
    <div className="flex p-2 items-center gap-3">
      <button
        onClick={decrement}
        className="text-accent disabled:text-slate-300"
        disabled={value === 1}
      >
        <GrSubtractCircle />
      </button>
      <span className="border rounded px-2">{value}</span>
      <button
        onClick={increment}
        className="text-accent disabled:text-slate-300"
        disabled={value === 10}
      >
        <GrAddCircle />
      </button>
    </div>
  );
};

export default ProductQuantity;
