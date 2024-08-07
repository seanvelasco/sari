import styles from "./SearchBar.module.css"

const SearchBar = () => {
	return (
		<input
			className={styles.search}
			type="text"
			placeholder="Search in Sari"
		/>
	)
}

export default SearchBar
