import { collection, addDoc } from "firebase/firestore";
import { db } from './db.js';
import { sales } from './sales.js';

export const preloadData = () => {
	try {
		sales.map( async c => {
			const docRef = await addDoc(collection(db, "sales"), c);
			console.log("Document written with ID: ", docRef.id);
		})
	} catch(e) {
		console.log(e);
	}
}

