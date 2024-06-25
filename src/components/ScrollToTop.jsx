import { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";

/**
 * Component that receives an html element in ref and scrolls to the top of that element on click.
 */
const ScrollToTop = ({ scrollRef }) => {
  const location = useLocation();

  const scrollToTop = useCallback(() => {
    scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
  }, [scrollRef]);

  /* implementing custom scroll to top when user navigates between pages as ScrollRestoration component of react-router is only working to restore window scroll and not scroll of nested elements */
  useEffect(() => {
    scrollToTop();
  }, [location, scrollToTop]);

  const [isVisible, setIsVisible] = useState(false);

  // useEffect to show the scroll to top button only when user has scrolled down on page
  useEffect(() => {
    function handleScroll() {
      if (scrollRef.current.scrollTop > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
    scrollRef.current.addEventListener("scroll", handleScroll);
    return () => {
      scrollRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <button
      className={`absolute bottom-5 right-5 bg-accent text-white rounded-full h-12 aspect-square flex justify-center items-center ${isVisible ? "flex" : "hidden"
        }`}
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;
