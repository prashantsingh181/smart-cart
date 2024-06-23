import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

/**
 * Component that receives an html element in ref and scrolls to the top of that element on click.
 */
const ScrollToTop = ({ scrollRef }) => {
    const [isVisible, setIsVisible] = useState(false)
    function scrollToTop() {
        scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }

    // useEffect to show the scroll to top button only when user has scrolled down on page
    useEffect(() => {
        function handleScroll() {
            if (scrollRef.current.scrollTop > 0) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }
        scrollRef.current.addEventListener('scroll', handleScroll)
        return () => {
            scrollRef.current.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <button className={`absolute bottom-5 right-5 bg-accent text-white rounded-full h-12 aspect-square flex justify-center items-center ${isVisible ? "flex" : "hidden"}`} onClick={scrollToTop}>
            <FaArrowUp />
        </button>
    )
}

export default ScrollToTop