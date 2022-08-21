import { GET_ALL_SALES } from './actions.js';

const initialState = {
	allSales: [],
	companyDetail: {}
}

export default function reducer( state = initialState, action ){

	switch (action.type) {

		case GET_ALL_SALES:
			return{
				...state,
				allSales: action.payload
			}

		default:
			return state;
	}

}