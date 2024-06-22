import { useRef } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

const Layout = () => {
    const mainRef = useRef(null);
    return (
        <div className="flex flex-col text-white h-screen">
            <Header />
            {/* main element with its own scrollbar */}
            <main ref={mainRef} className="flex-grow bg-darkGray overflow-auto">
                <Outlet />
            </main>
            <ScrollToTop scrollRef={mainRef} />
        </div>
    )
}

export default Layout