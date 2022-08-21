import { collection, getDocs } from "firebase/firestore";
import { db } from '../../db/db.js';
export const GET_ALL_SALES = 'GET_ALL_SALES';

export const getAllSales = () => {
	return async function(dispatch){
		let sales = [];
		const querySnapshot = await getDocs(collection(db, "sales"));
		querySnapshot.forEach((doc) => {
			sales.push(doc.data());
		});
		return dispatch({type: GET_ALL_SALES, payload: sales })
	}
}