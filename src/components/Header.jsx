import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import Navbar from "./Navbar";

const Header = () => {
    const location = useLocation();

    // effect to close the navbar in mobile screen when user navigates between pages.
    useEffect(() => {
        setIsOpen(false);
    }, [location])

    // state for navbar visibility
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="flex px-4 sticky top-0 z-50 items-center bg-black min-h-16 shadow">
            {/* logo */}
            <div className="flex gap-2 text-3xl lg:text-4xl items-center font-cardo">
                <GiShoppingCart className="text-teal" />
                <h1>SmartCart</h1>
            </div>
            {/* hamburger and close icon */}
            <button className="ml-auto text-2xl block lg:hidden text-teal" onClick={() => setIsOpen(prevIsOpen => !prevIsOpen)}>
                {isOpen ? <IoMdClose /> :
                    <RxHamburgerMenu />}

            </button>
            {/* navbar  */}
            <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
            {/* TODO: Logout and login */}
        </header>
    )
}

export default Header
