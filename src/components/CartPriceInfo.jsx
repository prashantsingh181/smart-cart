const CartPriceInfo = ({ products }) => {
  const productTotal = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
  const currency = import.meta.env.VITE_CURRENCY
  const tax = Number(import.meta.env.VITE_TAX);
  const taxPrice = Number(((tax * productTotal) / 100).toFixed(2));
  const totalAmount = (taxPrice + productTotal).toFixed(2);

  return (
    <section className="flex flex-col gap-2">
      <h3 className="font-bold text-slate-400 font-inter">Price Details ({`${products.length} Quantity`})</h3>
      <div className="flex flex-row justify-between"><span>Total MRP</span><span>{currency}{productTotal}</span></div>
      <div className="flex flex-row justify-between"><span>GST({tax}%)</span><span>{currency}{taxPrice}</span></div>
      <hr />
      <div className="flex flex-col gap-6">
        <div className="flex flex-row justify-between font-bold"><span>Total Amount</span><span>{currency}{totalAmount}</span></div>
        <button className="primary-button">PLACE ORDER</button>
      </div>
    </section>
  );
};

export default CartPriceInfo;
