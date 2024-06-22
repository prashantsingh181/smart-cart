import { FaArrowUp } from "react-icons/fa";

/**
 * Component that receives an html element in ref and scrolls to the top of that element on click.
 */
const ScrollToTop = ({ scrollRef }) => {
    function scrollToTop() {
        scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
    return (
        <button className="absolute bottom-5 right-5 bg-teal text-white rounded-full h-12 aspect-square flex justify-center items-center" onClick={scrollToTop}>
            <FaArrowUp />
        </button>
    )
}

export default ScrollToTop