import React from 'react'

export default function MonthMoreSales({monthMoreSales}) {
	return (
		<div className="monthMoreSales">
			<h2>Mes Más Ventas</h2>
			<p>{monthMoreSales}</p>
		</div>
	)
}