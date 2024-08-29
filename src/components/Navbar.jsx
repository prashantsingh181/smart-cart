import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { cartSelector } from "../redux/slices/cart";
import { BsCart3, BsHouseDoor, BsHeart, BsBag } from "react-icons/bs";

const Navbar = () => {
  const cartItems = useSelector(cartSelector);
  return (
    <nav className="font-inter text-lg hidden md:block">
      <ul className="flex gap-8">
        <NavItem to="/" title="Home" Icon={BsHouseDoor} />
        <NavItem to="/products" title="Shop" Icon={BsBag} />
        <NavItem to="/wishlist" title="Wishlist" Icon={BsHeart} />
        <NavItem
          to="/cart"
          title="Cart"
          Icon={BsCart3}
          number={cartItems.length}
        />
      </ul>
    </nav>
  );
};

export default Navbar;

function NavItem({ to, title, Icon, number }) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `${
            isActive ? "opacity-100 text-theme-primary-text" : "opacity-60"
          } hover:opacity-100 py-1 flex flex-col items-center justify-center`
        }
      >
        <div className="relative">
          {number > 0 && (
            <div className="absolute -top-2 -right-2 h-4 aspect-square rounded-full bg-red-400 flex items-center justify-center ">
              <span className="text-[0.7rem]">{number}</span>
            </div>
          )}
          <Icon size="1.35rem" />
        </div>
        <span className="text-xs">{title}</span>
      </NavLink>
    </li>
  );
}
