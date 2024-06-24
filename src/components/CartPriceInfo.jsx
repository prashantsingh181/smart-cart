const CartPriceInfo = ({ products }) => {
  return (
    <seciton className="flex flex-col gap-2">
      <h3>Product Details ({`${products.length} Quantity`})</h3>
    </seciton>
  );
};

export default CartPriceInfo;
