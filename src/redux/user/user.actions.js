/** @format */
import { userActionTypes } from "./user.types";
/**
 * Takes user as a param and set the payload to this user
 * @param {*} user
 * @returns {Type} | e.g. SET_CURRENT_USER
 */
export const setCurrentUser = (user) => ({
	type: userActionTypes.SET_CURRENT_USER,
	payload: user,
});
