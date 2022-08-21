import { useSalesByCompany } from '../Companies/useSalesByCompany.js';
import { useParams } from 'react-router-dom';
import TopBar from '../../components/TopBar/TopBar.jsx';
import Menu from '../../components/Menu/Menu.jsx';
import CompanyDetailTable from '../../components/CompanyDetailTable/CompanyDetailTable.jsx';

export default function CompanyDetail() {

	const { salesByCompany } = useSalesByCompany();
	const { nombre_empresa } = useParams()

	let company = salesByCompany?.find( c => c.nameAgency.replaceAll(' ', '-').toLowerCase() === nombre_empresa );

	return (
		<>
			<TopBar />
			<Menu companyName={company?.nameAgency}  />
			<CompanyDetailTable company={company} />
		</>
	)
}