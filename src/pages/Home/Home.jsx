import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<div className="home">
			<Link to="/empresas"><Button variant="info">Ver Ventas</Button></Link>
		</div>
	)
}