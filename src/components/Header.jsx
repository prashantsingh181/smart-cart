import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import Navbar from "./Navbar";
import ThemeButton from "./Theme";

const Header = ({ isNavbarOpen, toggleNavbarVisibility }) => {
  return (
    <header className="flex px-4 sticky top-0 z-50 justify-between items-center bg-primary-background min-h-12 md:min-h-16 shadow shadow-shadow-color">
      {/* logo */}
      <Link
        to="/"
        className="flex gap-1 text-2xl md:text-4xl items-center font-cardo text-theme-color"
      >
        <AiOutlineShoppingCart />
        <h1>SmartCart</h1>
      </Link>
      <div className="flex items-center">
        <ThemeButton />
        {/* hamburger and close icon */}
        <button
          className="text-2xl block md:hidden text-theme-color"
          onClick={toggleNavbarVisibility}
        >
          {isNavbarOpen ? <IoMdClose /> : <RxHamburgerMenu />}
        </button>
        {/* navbar  */}
        <Navbar />
      </div>
      {/* TODO: Logout and login */}
    </header>
  );
};

export default Header;
