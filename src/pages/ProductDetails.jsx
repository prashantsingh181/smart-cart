import { useParams } from "react-router-dom"
import { useSelector } from "react-redux";
import { productByIdSelector, productsByCategorySelector } from "../redux/slices/products";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import Rating from "../components/Rating";
import ProductListRow from "../components/ProductListRow";

const ProductDetails = () => {
    // getting productId from URL and getting corresponding product details from redux store
    const { productId } = useParams();
    const product = useSelector((state) => productByIdSelector(state, Number(productId)))

    // extracting category of product and getting similar items in that category
    const category = product && product.category;
    const similarCategoryProducts = useSelector((state) => productsByCategorySelector(state, category))

    return (<>
        {product && <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-2">
            <section className="h-96 flex justify-center items-center">
                <img src={product.image} alt={product.title} className="rounded max-h-full max-w-full" />
            </section>
            <section className="flex flex-col gap-4">
                <h2 className="text-2xl">{product.title}</h2>
                <div className="bg-gray shadow bg-opacity-50 backdrop-blur-sm p-1 rounded font-bold self-start">
                    <Rating rate={product.rating.rate} count={product.rating.count} />
                </div>
                <hr />
                <div className="flex flex-col"><span className="font-bold text-red-500 text-xl">{import.meta.env.VITE_CURRENCY}{product.price}</span><span>inclusive of all taxes</span></div>
                {/* Quantity for product here */}
                {/* cart and wishlist button */}
                <div className="flex gap-10">
                    <button className="bg-accent text-white rounded px-6 py-3 flex gap-2 items-center text-lg"><AiOutlineShoppingCart className="text-xl" />
                        <span>ADD TO CART</span></button>
                    <button className="border border-accent text-accent bg-white rounded px-6 py-3 flex gap-2 items-center text-lg">
                        <FaRegHeart className="text-xl" />
                        <span>WISHLIST</span>
                    </button>
                </div>
                <hr />
                {/* product description */}
                <div>
                    <h3 className="text-xl font-bold">Description</h3>
                    <p className="py-2">{product.description}</p>
                </div>
            </section>
        </div>}
        <hr className="my-8" />
        {/* similar items */}
        {category && <section className="flex flex-col gap-4 my-4">
            <h3 className="text-xl font-bold">See more in {category}</h3>
            <ProductListRow products={similarCategoryProducts} />
        </section>}
    </>
    )
}

export default ProductDetails