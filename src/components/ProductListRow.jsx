import { ProductTile } from "./ProductTile"

const ProductListRow = ({ products }) => {
    return (
        <div className="overflow-auto w-full flex flex-row gap-5 py-2 justify-center">
            {products && products.length > 0 && products.map(product => <div key={product.id} className="min-w-60 w-60 border rounded"><ProductTile key={product.id} product={product} /></div>)}
        </div>
    )
}

export default ProductListRow