import { Link } from 'react-router-dom';

export default function Menu({companyName}) {
	return (
		<nav className="menu">
			<Link to="/empresas"><p>Empresa</p></Link>
			<p>></p>
			<p>{companyName}</p>
		</nav>
	)
}