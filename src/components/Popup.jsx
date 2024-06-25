import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hidePopup, popupSelector } from "../redux/slices/popup";
import { IoMdClose } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

const Popup = () => {
    const dispatch = useDispatch();
    const popup = useSelector(popupSelector);

    // useEffect to close the popup after 3 sec automatically
    useEffect(() => {
        if (popup.isVisible) {
            const timeOut = setTimeout(() => dispatch(hidePopup()), 3000);
            return () => clearTimeout(timeOut);
        }
    }, [popup, dispatch]);

    if (popup.isVisible) {
        return (
            <div
                className={`${popup.isError ? "bg-red-300" : "bg-green-300"
                    } fixed z-20 top-24 right-8 flex flex-row gap-5 items-center bg-opacity-20 backdrop-blur-sm p-2 rounded border-slate-300 shadow-lg`}
            >
                <div className="flex flex-row gap-3 items-center">
                    {popup.isError ? (
                        <IoMdCloseCircle className="text-red-500" />
                    ) : (
                        <FaCheckCircle className="text-green-500" />
                    )}
                    <span>{popup.message}</span>
                </div>
                <button className="text-red-500" onClick={() => dispatch(hidePopup())}>
                    <IoMdClose />
                </button>
            </div>
        );
    }
};

export default Popup;
