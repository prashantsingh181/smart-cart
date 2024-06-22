import { GiShoppingCart } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="flex p-3 sticky top-0 z-50 items-center border-b-[0.8px] border-borderGray">
            <div className="flex gap-1 text-4xl items-center font-cardo">
                <GiShoppingCart className="text-teal" />
                <h1>SmartCart</h1>
            </div>
            <nav className="ml-auto font-inter text-lg">
                <ul className="flex gap-8">
                    <li>
                        <NavLink to="/" className={({ isActive }) => `${isActive ? "opacity-100 border-b" : "opacity-50"} hover:opacity-100 tracking-wider py-1`}>HOME</NavLink>
                    </li>
                    <li >
                        <NavLink to="/wishlist" className={({ isActive }) => `${isActive ? "opacity-100 border-b" : "opacity-50"} hover:opacity-100 tracking-wider py-1`}>WISHLIST</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart" className={({ isActive }) => `${isActive ? "opacity-100 border-b" : "opacity-50"} hover:opacity-100 tracking-wider py-1`}>CART</NavLink>
                    </li>
                </ul>
            </nav>
            {/* TODO: Logout and login */}
        </header>
    )
}

export default Header