export default function MoreSales({allTotalSales}) {
	return (
		<div className="moreSales">
			<h2>Empresa Más Ventas</h2>
			<p>${Math.max(...allTotalSales).toLocaleString()}</p>
		</div>
	)
}