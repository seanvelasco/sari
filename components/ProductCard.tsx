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
		<>
			<Image className={styles.preview} src={preview} alt={name} />
			<p>{name}</p>
			<p>PHP {price}</p>
			<p>
				{rating} ({reviewCount})
			</p>
		</>
	)
}

export default ProductCard
