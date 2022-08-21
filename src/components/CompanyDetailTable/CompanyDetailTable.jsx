import { Table, Button } from 'react-bootstrap';

export default function CompanyDetailTable({company}) {
	return (
		<Table striped bordered variant="light" className="table" size="lg">
			<thead>
				<tr>
					<th>Nombre Cliente</th>
					<th>Personas</th>
					<th>Día</th>
					<th>Hora</th>
					<th>Valor Venta</th>
				</tr>
			</thead>
			<tbody>
				{
					company && company.sales.map( (n, index) => 
						<tr key={index}>
							<td>{n.name}</td>
							<td>{n.persons}</td>
							<td>{n.datePayment.split(' ')[0]}</td>
							<td>{n.hour}</td>
							<td>${n.finalPrice.toLocaleString()}</td>
						</tr>
					)
				}
				
			</tbody>
		</Table>
	)
}