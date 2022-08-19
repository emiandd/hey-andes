import { collection, getDocs } from "firebase/firestore";
import { db } from '../../db/db.js';
export const GET_ALL_COMPANIES = 'GET_ALL_COMPANIES';



export const getAllCompanies = () => {
	return async function(dispatch){
		let companies = [];
		const querySnapshot = await getDocs(collection(db, "companies"));
		querySnapshot.forEach((doc) => {
			companies.push(doc.data());
		});
		return dispatch({type: GET_ALL_COMPANIES, payload: companies })
	}
}