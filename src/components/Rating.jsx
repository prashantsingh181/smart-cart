import { FaStar } from "react-icons/fa6";

const Rating = ({ rate, count }) => {
    return (
        <div className="flex flex-row items-center gap-1">
            <span>{rate}</span>
            <FaStar className="text-yellow-500" />
            <span>({count})</span>
        </div>
    )
}

export default Rating