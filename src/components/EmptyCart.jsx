import emptyBag from "../assets/empty-bag.png";
import { Link } from "react-router-dom";

const EmptyCart = ({ text, buttonText, to }) => {
    return (
        <div className="flex flex-col items-center gap-6">
            <div className="h-80 flex justify-center"><img className="max-h-full max-w-full" src={emptyBag} alt="empty bag" /></div>
            <p className="text-center text-slate-400">{text}</p>
            <Link to={to} className="primary-button">{buttonText}</Link>
        </div>
    )
}

export default EmptyCart