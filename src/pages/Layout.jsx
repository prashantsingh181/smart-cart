import { useRef, useState, useEffect } from "react";
import Header from "../components/Header";
import { Outlet, useLocation } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Popup from "../components/Popup";
import MobileNavbar from "../components/MobileNavbar";

const Layout = () => {
  const mainRef = useRef(null);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const location = useLocation();

  // closing the navbar whenever location changes
  useEffect(() => {
    hideNavbarVisibility();
  }, [location]);

  function toggleNavbarVisibility() {
    setIsNavbarOpen((prevIsOpen) => !prevIsOpen);
  }
  function hideNavbarVisibility() {
    setIsNavbarOpen(false);
  }

  return (
    <div className="flex flex-col text-primary-text h-screen">
      <Header
        isNavbarOpen={isNavbarOpen}
        toggleNavbarVisibility={toggleNavbarVisibility}
      />
      {/* main element with its own scrollbar */}
      <main
        ref={mainRef}
        className="flex-grow overflow-auto relative font-roboto bg-secondary-background"
      >
        <Outlet />
        <Popup />
      </main>
      <MobileNavbar
        isNavbarOpen={isNavbarOpen}
        hideNavbarVisibility={hideNavbarVisibility}
      />
      <ScrollToTop scrollRef={mainRef} />
    </div>
  );
};

export default Layout;
