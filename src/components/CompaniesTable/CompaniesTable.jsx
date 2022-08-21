import { useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';


export default function CompaniesTable({salesByCompany}) {

	// Sorting the array of objects by the name of the agency.
	salesByCompany = salesByCompany.sort( (a, b) => {
		if(a.nameAgency.toLowerCase() === b.nameAgency.toLowerCase()) return 0;
		else if(a.nameAgency.toLowerCase() > b.nameAgency.toLowerCase()) return 1;
		else return -1;
	})

	return (
		<Table striped bordered variant="dark" className="table" size="lg">
			<thead>
				<tr>
					<th>#</th>
					<th>Nombre Empresa</th>
					<th>Total Ventas</th>
					<th>Comisión</th>
					<th>Detalle</th>
				</tr>
			</thead>
			<tbody>
				{
					salesByCompany && salesByCompany.map( (n, index) => 
						<tr key={index}>
							<td>{index + 1}</td>
							<td>{n.nameAgency}</td>
							<td>${n.sales}</td>
							<td>${n.comision}</td>
							<td><Button variant="info">Ver Detalle</Button></td>
						</tr>
					)
				}
				
			</tbody>
		</Table>
		)
}