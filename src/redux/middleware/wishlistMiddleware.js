const wishlistMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    if (action.type?.startsWith("wishlist/"))
      localStorage.setItem("wishlist", JSON.stringify(getState().wishlist));
    return result;
  };
};

export default wishlistMiddleware;
