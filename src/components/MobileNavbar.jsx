import { NavLink } from "react-router-dom";
import { BsCart3, BsHouseDoor, BsHeart, BsBag } from "react-icons/bs";
import { useSelector } from "react-redux";
import { cartSelector } from "../redux/slices/cart";

function MobileNavbar({ isNavbarOpen, hideNavbarVisibility }) {
  const cartItems = useSelector(cartSelector);
  return (
    <>
      <div
      onClick={hideNavbarVisibility}
        className={`fixed top-0 left-0 w-screen h-screen opacity-70 md:hidden transition duration-500 ${
          isNavbarOpen ? "bg-black z-20" : "bg-transparent -z-10"
        }`}
      ></div>
      <div
        className={`fixed z-30 w-48 top-0 right-0 md:hidden h-screen bg-secondary-background text-primary-color pt-12 md:pt-16 transition duration-500 ${isNavbarOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <nav>
          <ul className="px-2 py-4 flex flex-col gap-2">
            <MobileNavItems to="/" title="HOME" Icon={BsHouseDoor} />
            <MobileNavItems to="/products" title="SHOP" Icon={BsBag} />
            <MobileNavItems to="/wishlist" title="WISHLIST" Icon={BsHeart} />
            <MobileNavItems
              to="/cart"
              title="CART"
              Icon={BsCart3}
              count={cartItems.length}
            />
          </ul>
        </nav>
      </div>
    </>
  );
}

function MobileNavItems({ to, title, Icon, count }) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `${
            isActive ? "bg-theme-color" : ""
          } flex gap-3 items-center px-3 py-2 rounded`
        }
      >
        <Icon size="1.2rem" />
        {title}
        {count > 0 && (
          <div className="h-6 aspect-square rounded-full bg-red-400 flex items-center justify-center">
            <span>{count}</span>
          </div>
        )}
      </NavLink>
    </li>
  );
}

export default MobileNavbar;
