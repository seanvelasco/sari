import Link from "next/link"

enum OrderStatus {
	COMPLETED,
	PENDING,
	PLACED,
	REFUNDED
}

type OrderItem = {
	id: string
	name: string
}

type Order = {
	id: string
	status: OrderStatus
	created: Date
	items: OrderItem[]
	total: number
}

const Layout = ({ children }: { children: React.ReactNode }) => {
	const orders: Order[] = [
		{
			id: "1",
			status: OrderStatus.COMPLETED,
			created: new Date(),
			items: [],
			total: 0
		}
	]

	return (
		<div>
			<h1>Orders</h1>
			<div>
				<ul>
					{orders.map(({ id }) => (
						<Link key={id} href={id}>
							asd
						</Link>
					))}
				</ul>
				{children}
			</div>
		</div>
	)
}

export default Layout
