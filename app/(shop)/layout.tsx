"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import SearchBar from "@/components/SearchBar"
import {
	CartIcon,
	HomeIcon,
	ChatIcon,
	BoxIcon,
	PersonIcon,
	ElipsisIcon
} from "@/icons"
import styles from "./layout.module.css"

const useUser = () => {
	return "seanvelasco"
}

const Sidebar = () => {
	const user = useUser()
	const pathname = usePathname()

	const nav = [
		{
			label: "Home",
			href: "/",
			icon: HomeIcon
		},
		{
			label: "Messages",
			href: "/messages",
			icon: ChatIcon
		},
		{
			label: "Orders",
			href: "/orders",
			icon: BoxIcon
		},
		{
			label: "User",
			href: `/user/${user}`,
			icon: PersonIcon
		}
	]
	return (
		<aside className={styles.aside}>
			<Link className={styles.link} href="/">
				{/* <HomeIcon /> */}
			</Link>
			<nav className={styles.nav}>
				{nav.map(({ href, icon: Icon }) => {
					const active = pathname === href
					return (
						<Link
							key={href}
							className={`${styles.link} ${
								active && styles.active
							}`}
							href={href}
						>
							<Icon filled={active} />
						</Link>
					)
				})}
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
	const pathname = usePathname()

	return (
		<>
			<Sidebar />
			<Header>
				<SearchBar />
				<Link
					className={`${styles.cart} ${
						pathname === "/cart" && styles.active
					}`}
					href="/cart"
				>
					<CartIcon filled={pathname === "/cart"} />
				</Link>
			</Header>
			<main className={styles.main}>{children}</main>
		</>
	)
}

export default Layout
