import { collection, addDoc } from "firebase/firestore";
import { db } from './db.js';
import { companies } from './companies.js';

export const preloadData = () => {
	try {
		companies.map( async c => {
			const docRef = await addDoc(collection(db, "companies"), c);
			console.log("Document written with ID: ", docRef.id);
		})
	} catch(e) {
		console.log(e);
	}
}

