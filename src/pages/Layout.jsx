import { useRef } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

const Layout = () => {
    const mainRef = useRef(null);
    return (
        <div className="flex flex-col text-dark bg-white h-screen">
            <Header />
            {/* main element with its own scrollbar */}
            <main ref={mainRef} className="flex-grow overflow-auto relative font-roboto">
                <div className="container mx-auto p-4">
                    <Outlet />
                </div>

            </main>
            <ScrollToTop scrollRef={mainRef} />
        </div>
    )
}

export default Layout