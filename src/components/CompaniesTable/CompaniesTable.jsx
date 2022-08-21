import { useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function CompaniesTable({salesByCompany}) {

	// Sorting the array of objects by the name of the agency.
	salesByCompany = salesByCompany.sort( (a, b) => {
		if(a.nameAgency.toLowerCase() === b.nameAgency.toLowerCase()) return 0;
		else if(a.nameAgency.toLowerCase() > b.nameAgency.toLowerCase()) return 1;
		else return -1;
	})

	return (
		<Table striped bordered variant="light" className="table" size="lg">
			<thead>
				<tr>
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
							<td>{n.nameAgency}</td>
							<td>${n.sales.reduce( (total, sale) => total + sale.finalPrice, 0).toLocaleString()}</td>
							<td>${n.comision.toLocaleString()}</td>
							<td><Link to={`/empresas/${n.nameAgency.replaceAll(' ', '-').toLowerCase()}`}><Button variant="info">Ver Detalle</Button></Link></td>
						</tr>
					)
				}
				
			</tbody>
		</Table>
		)
}