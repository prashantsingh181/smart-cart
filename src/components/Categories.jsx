import { useSelector } from "react-redux"
import { categoriesSelector } from "../redux/slices/categories"
import { capitalizeAllWords } from "../utils/commonUtils";

const Categories = () => {
    const categories = useSelector(categoriesSelector);
    return (
        <menu className="flex flex-wrap gap-6 my-4 justify-center font-inter">
            <li>All</li>
            {categories.map((category, i) => <li key={i} value={category} className="whitespace-nowrap">{capitalizeAllWords(category)}</li>)}
        </menu>
    )
}

export default Categories