const cartMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    if (action.type?.startsWith("cart/"))
      localStorage.setItem("cart", JSON.stringify(getState().cart));
    return result;
  };
};

export default cartMiddleware;
