import { useLocation, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { cartSelector } from '../redux/slices/cart';

const Navbar = ({ isOpen }) => {
    const location = useLocation();
    const cartItems = useSelector(cartSelector);
    return (
        <nav className={`p-4 font-inter text-lg shadow lg:shadow-none absolute lg:static z-[-10] right-0 top-0 pt-16 lg:p-0 lg:ml-auto w-48 lg:w-auto h-screen lg:h-auto bg-white ${isOpen ? "block" : "hidden"} lg:block`}>
            <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8">
                <li title="Home">
                    <NavLink to="/" className={({ isActive }) => `${isActive ? "opacity-100 border-b-2 border-accent" : "opacity-50"} hover:opacity-100 tracking-wider py-1 block text-center`}>HOME</NavLink>
                </li>
                <li title="Home">
                    <NavLink to="/products" className={({ isActive }) => `${isActive ? "opacity-100 border-b-2 border-accent" : "opacity-50"} hover:opacity-100 tracking-wider py-1 block text-center`}>PRODUCTS</NavLink>
                </li>
                <li title="Wishlist">
                    <NavLink to="/wishlist" className={({ isActive }) => `${isActive ? "opacity-100 border-b-2 border-accent" : "opacity-50"} hover:opacity-100 tracking-wider py-1 block text-center`}>WISHLIST</NavLink>
                </li>
                <li title="Cart">
                    <NavLink to="/cart" className={({ isActive }) => `${isActive ? "opacity-100 border-b-2 border-accent" : "opacity-50"} hover:opacity-100 tracking-wider py-1 block text-center`}>CART({cartItems.length})</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar