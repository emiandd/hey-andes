import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	allCompanies: []
}

export const companiesSlice = createSlice({
	name: 'companies',
	initialState,
	reducers: {
		preloadData: (state) => {
			state.allCompanies = ['test']
		}
	}
})

export const { preloadData } = companiesSlice.actions

export default companiesSlice.reducer