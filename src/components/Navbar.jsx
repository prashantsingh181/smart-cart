import { useLocation, NavLink } from 'react-router-dom';

const Navbar = ({ isOpen }) => {
    const location = useLocation();
    return (
        <nav className={`p-4 font-inter text-lg shadow lg:shadow-none absolute lg:static z-[-10] right-0 top-0 pt-16 lg:p-0 lg:ml-auto w-48 lg:w-auto h-screen lg:h-auto bg-white ${isOpen ? "block" : "hidden"} lg:block`}>
            <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8">
                <li title="Home">
                    <NavLink to="/" className={({ isActive }) => `${isActive ? "opacity-100" : "opacity-50"} hover:opacity-100 tracking-wider py-1 block text-center`}>HOME</NavLink>
                </li>
                <li title="Wishlist">
                    <NavLink to="/wishlist" className={({ isActive }) => `${isActive ? "opacity-100" : "opacity-50"} hover:opacity-100 tracking-wider py-1 block text-center`}>WISHLIST</NavLink>
                </li>
                <li title="Cart">
                    <NavLink to="/cart" className={({ isActive }) => `${isActive ? "opacity-100" : "opacity-50"} hover:opacity-100 tracking-wider py-1 block text-center`}>CART</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar