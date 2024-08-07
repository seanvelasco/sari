import ProductCard from "@/components/ProductCard"
import styles from "./page.module.css"
import type { ProductItem } from "@/components/ProductCard"

const Shop = () => {
	const products: ProductItem[] = [
		{
			id: "1",
			name: "Product 1",
			preview: "https://img.sean.app/psyduck.png",
			price: 10,
			rating: 5,
			reviewCount: 300
		}
	]
	return (
		<div>
			<div className={styles.products}>
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
	)
}

{
	/* <h1>Shop</h1>
			<h2>Payment methods</h2> */
}

export default Shop
