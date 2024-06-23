import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
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
        <header className="flex px-4 sticky top-0 z-50 items-center bg-white min-h-16 shadow-lg">
            {/* logo */}
            <Link to="/" className="flex gap-1 text-3xl lg:text-4xl items-center font-cardo text-accent">
                <AiOutlineShoppingCart />
                <h1>SmartCart</h1>
            </Link>
            {/* hamburger and close icon */}
            <button className="ml-auto text-2xl block lg:hidden text-accent" onClick={() => setIsOpen(prevIsOpen => !prevIsOpen)}>
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
