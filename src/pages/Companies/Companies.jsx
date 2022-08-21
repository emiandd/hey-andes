import { useSalesByCompany } from './useSalesByCompany.js';
import TopBar from '../../components/TopBar/TopBar.jsx';
import CompanyMoreSales from '../../components/CompanyMoreSales/CompanyMoreSales.jsx';
import MonthMoreSales from '../../components/MonthMoreSales/MonthMoreSales.jsx';
import CompaniesTable from '../../components/CompaniesTable/CompaniesTable.jsx';

export default function Companies() {

	const [allTotalSales, salesByCompany, monthMoreSales] = useSalesByCompany();

	return (
		<>
			<TopBar />
			<main className="main">
				<div className="company-month">
					<CompanyMoreSales allTotalSales={allTotalSales} />
					<MonthMoreSales monthMoreSales={monthMoreSales} />
				</div>
				<CompaniesTable salesByCompany={salesByCompany} />
			</main>
		</>
	)
}