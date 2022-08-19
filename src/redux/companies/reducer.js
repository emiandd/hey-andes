import { GET_ALL_COMPANIES } from './actions.js';

const initialState = {
	allCompanies: [],
	companyDetail: {}
}

export default function reducer( state = initialState, action ){

	switch (action.type) {

		case GET_ALL_COMPANIES:
			return{
				...state,
				allCompanies: action.payload
			}

		default:
			return state;
	}

}