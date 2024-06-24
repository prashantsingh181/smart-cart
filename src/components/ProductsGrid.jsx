import { ProductTile } from "./ProductTile"

// products grid to show products in grid manner
const ProductsGrid = ({ products }) => {
    return (
        <div className="py-2 grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">{products && products.length > 0 && products.map(product => <div key={product.id} className="h-80"><ProductTile product={product} /></div>)}</div>
    )
}

export default ProductsGrid