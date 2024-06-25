import { ProductTile } from "./ProductTile";

// component to show products tile in a row
const ProductListRow = ({ products }) => {
  return (
    <div className="overflow-auto max-w-full flex flex-row gap-5 py-2">
      {products &&
        products.length > 0 &&
        products.map((product) => (
          <div
            key={product.id}
            className="min-w-44 w-44 h-72 shadow-lg rounded border border-gray"
          >
            <ProductTile key={product.id} product={product} imageHeight="240" />
          </div>
        ))}
    </div>
  );
};

export default ProductListRow;
