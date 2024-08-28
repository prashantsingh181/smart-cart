const themeMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    if (action.type?.startsWith("theme/")) {
      localStorage.setItem("theme", getState().theme);
    }
    return result;
  };
};

export default themeMiddleware