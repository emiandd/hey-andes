import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSales } from '../../redux/companies/actions.js';

export const useSalesByCompany = () => {

		const dispatch = useDispatch();
		const allSales = useSelector( state => state.allSales );
		const allTotalSales = [];
		const salesByMonth = [];
		let monthMoreSales = '';


	/*  1. It is creating a new array with the name of the companies
		2. It is filtering the array to remove duplicates
		3. It is creating a new array of objects with the name of the company, the total sales, and the comission. */
		let nameCompanies = allSales.map( s => s.nameAgency)
		nameCompanies = nameCompanies.filter( (n, index) => {
			return nameCompanies.indexOf(n) === index;
		})
		let salesByCompany = nameCompanies.map( c => {
			let obj = {
				nameAgency: c,
				sales: allSales.filter( s => s.nameAgency === c).reduce( (total, sale) => total + sale.finalPrice, 0),
				comision: allSales.filter( s => s.nameAgency === c).reduce( (total, sale) => total + sale.finalPrice, 0) * .025
			}
			allTotalSales.push(obj.sales);
			return obj;
		})

		allSales.map( c => {
			let sale = c.datePayment.split('-')[1];
			salesByMonth.push(Number(sale))
		})

		let months = {
			enero: 0,
			febrero: 0,
			marzo: 0,
			abril: 0,
			mayo: 0,
			junio: 0,
			julio: 0,
			agosto: 0,
			septiembre: 0,
			octubre: 0,
			noviembre: 0,
			diciembre: 0
		}

		salesByMonth.map( s => {
			switch (s) {

				case 1:
					return months.enero = months.enero + 1;

				case 2:
					return months.febrero = months.febrero + 1;

				case 3:
					return months.marzo = months.marzo + 1;

				case 4:
					return months.abril = months.abril + 1;

				case 5:
					return months.mayo = months.mayo + 1;

				case 6:
					return months.junio = months.junio + 1;

				case 7:
					return months.julio = months.julio + 1;

				case 8:
					return months.agosto = months.agosto + 1;

				case 9:
					return months.septiembre = months.septiembre + 1;

				case 10:
					return months.octubre = months.octubre + 1;

				case 11:
					return months.noviembre = months.noviembre + 1;

				case 12:
					return months.diciembre = months.diciembre + 1;
			}
		})

		months = Object.entries(months)

		/* Comparing the sales of each month and finding the month with the most sales. */
		for(let i = 0; i < months.length - 1; i++){
			if(months[i][1] > months[i + 1][1]){
				monthMoreSales = months[i][0]
			}
		}

		useEffect(() => {
			dispatch(getAllSales());
		}, [])

		return [allTotalSales, salesByCompany, monthMoreSales];
}
