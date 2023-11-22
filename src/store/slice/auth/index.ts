import { createSlice } from '@reduxjs/toolkit';
import { IAuthState } from '../../../common/types/auth';

const initialState: IAuthState = {
	token: null,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login(state, action) {
			state.token = action.payload;
		},
		logOut(state, action) {
			state.token = null;
		},
		refresh() {},
	},
});

export const { login, logOut, refresh } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state: { auth: IAuthState }) =>
	state.auth.token;
