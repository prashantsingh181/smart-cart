import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="flex flex-col bg-black text-white h-screen w-screen">
            <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
        </div>
    )
}

export default Layout