import { useRouteError, useNavigate } from "react-router-dom";
import emptyBag from "../assets/empty-bag.png";

const EmptyCart = ({ text, buttonText, onClick }) => {
  const error = useRouteError();
  console.log(error)
  const errorMessage = !text && (error.status ? `${error.status} : ${error.statusText}` : error.message)
  const navigate = useNavigate();

  let handleClick;
  if (typeof onClick === "function") {
    handleClick = onClick;
  } else {
    handleClick = () => navigate("/");
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="h-80 flex justify-center">
        <img className="max-h-full max-w-full" src={emptyBag} alt="empty bag" />
      </div>
      <p className="text-center text-slate-400">
        {text ?? errorMessage}
      </p>
      <button onClick={handleClick} className="primary-button">
        {buttonText}
      </button>
    </div>
  );
};

export default EmptyCart;
