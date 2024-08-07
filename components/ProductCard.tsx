import Image from "next/image"
import styles from "./ProductCard.module.css"

export type ProductItem = {
	id: string
	name: string
	preview: string
	price: number
	rating: number
	reviewCount: number
}

const ProductCard = ({ product }: { product: ProductItem }) => {
	const { name, preview, price, rating, reviewCount } = product
	return (
		<div className={styles.card}>
			<img
				className={styles.preview}
				src={preview}
				alt={name}
				width={192}
				height={192}
			/>
			<div className={styles.description}>
				<p className={styles.name}>{name}</p>
				<p className={styles.price}>
					{price.toLocaleString("en-PH", {
						style: "currency",
						currency: "PHP"
					})}
				</p>
				<p className={styles.rating}>
					{rating} ({reviewCount})
				</p>
			</div>
		</div>
	)
}

export default ProductCard
