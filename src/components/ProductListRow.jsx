import ProductTile from "./ProductTile";

// component to show products tile in a row
const ProductListRow = ({ products }) => {
  return (
    <div className="overflow-auto max-w-full flex flex-row gap-5 py-2">
      {products &&
        products.length > 0 &&
        products.map((product) => (
          <ProductTile key={product.id} product={product} className="min-w-56 w-56" />
        ))}
    </div>
  );
};

export default ProductListRow;
