import Link from "next/link"
import SearchBar from "@/components/SearchBar"
import { HomeIcon, ChatIcon, BoxIcon, PersonIcon, ElipsisIcon } from "@/icons"
import styles from "./styles.module.css"

const Sidebar = () => {
	return (
		<aside className={styles.aside}>
			<Link className={styles.link} href="/">
				{/* <HomeIcon /> */}
			</Link>
			<nav className={styles.nav}>
				<Link className={styles.link} href="/products">
					<HomeIcon />
				</Link>
				<Link className={styles.link} href="/messages">
					<ChatIcon />
				</Link>
				<Link className={styles.link} href="/orders">
					<BoxIcon />
				</Link>
				<Link className={styles.link} href="/">
					<PersonIcon />
				</Link>
			</nav>
			<Link className={styles.link} href="/">
				<ElipsisIcon />
			</Link>
		</aside>
	)
}

const Header = ({ children }: { children: React.ReactNode }) => (
	<header className={styles.header}>{children}</header>
)

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className={styles.container}>
			<Sidebar />
			<div className={styles.main}>
				<Header>
					<SearchBar />
				</Header>
				<main className={styles.slot}>{children}</main>
			</div>
		</div>
	)
}

export default Layout
