import ProductCard from "@/components/ProductCard"
import type { ProductItem } from "@/components/ProductCard"

const Shop = () => {
	const products: ProductItem[] = [
		{
			id: "1",
			name: "Product 1",
			preview: "",
			price: 10,
			rating: 5,
			reviewCount: 300
		}
	]
	return (
		<div>
			<h1>Products</h1>
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	)
}

{
	/* <h1>Shop</h1>
			<h2>Payment methods</h2> */
}

export default Shop
