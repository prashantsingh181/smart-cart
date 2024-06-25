import { useSelector } from "react-redux";
import { categoriesSelector } from "../redux/slices/categories";
import { capitalizeAllWords } from "../utils/commonUtils";

// component to show categories at top of home page
const Categories = ({ selectedCategory, setSelectedCategory }) => {
  const categories = useSelector(categoriesSelector);
  return (
    <menu className="flex flex-wrap gap-x-6 gap-y-3 my-4 justify-center font-inter">
      <li>
        <button
          className={`${
            "all" === selectedCategory ? "bg-accent text-white" : ""
          } px-4 py-2 rounded`}
          onClick={() => setSelectedCategory("all")}
        >
          All
        </button>
      </li>
      {categories.map((category, i) => (
        <li key={i} className="whitespace-nowrap">
          <button
            onClick={(e) => setSelectedCategory(e.target.value)}
            value={category}
            className={`${
              category === selectedCategory ? "bg-accent text-white" : ""
            } px-4 py-2 rounded`}
          >
            {capitalizeAllWords(category)}
          </button>
        </li>
      ))}
    </menu>
  );
};

export default Categories;
