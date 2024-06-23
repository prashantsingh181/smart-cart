import { useParams } from "react-router-dom"
import { useSelector } from "react-redux";
import { productByIdSelector } from "../redux/slices/products";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import Rating from "../components/Rating";

const ProductDetails = () => {
    const { productId } = useParams();
    const product = useSelector((state) => productByIdSelector(state, Number(productId)))
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
                <div className="flex gap-10">
                    <button className="bg-accent text-white rounded px-6 py-3 flex gap-2 items-center text-lg"><AiOutlineShoppingCart className="text-xl" />
                        <span>ADD TO CART</span></button>
                    <button className="border border-accent text-accent bg-white rounded px-6 py-3 flex gap-2 items-center text-lg">
                        <FaRegHeart className="text-xl" />
                        <span>WISHLIST</span>
                    </button>
                </div>
                <hr />
                <div>
                    <h3 className="text-xl font-bold">Description</h3>
                    <p className="py-2">{product.description}</p>
                </div>
            </section>
        </div>}p
    </>
    )
}

export default ProductDetails