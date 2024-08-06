import Link from "next/link"
import styles from "./styles.module.css"

const Sidebar = () => {
	return (
		<aside className={styles.aside}>
			<Link className={styles.link} href="/">
				Home
			</Link>
			<nav className={styles.nav}>
				<Link className={styles.link} href="/products">
					Products
				</Link>
				<Link className={styles.link} href="/messages">
					Messages
				</Link>
				<Link className={styles.link} href="/orders">
					Orders
				</Link>
				<Link className={styles.link} href="/">
					User
				</Link>
			</nav>
			<Link className={styles.link} href="/">
				Menu
			</Link>
		</aside>
	)
}

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className={styles.container}>
			<Sidebar />
			{children}
		</div>
	)
}

export default Layout
