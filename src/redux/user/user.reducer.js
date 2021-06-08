/** @format */
// last state && initial state
import { userActionTypes } from "./user.types";

const INITIAL_STATE = {
	currentUser: null,
};

/**
 * @param {*} state || the state of the reducer
 * @param {*} action || the type and the payload
 * @returns state as default if the action we care about is not there
 */
const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case userActionTypes.SET_CURRENT_USER:
			return {
				...state,
				currentUser: action.payload,
			};

		default:
			return state;
	}
};

export default userReducer;
