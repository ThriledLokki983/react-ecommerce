/** @format */
/**
 * Takes user as a param and set the payload to this user
 * @param {*} user
 * @returns {Type} | e.g. SET_CURRENT_USER
 */
export const setCurrentUser = (user) => ({
	type: "SET_CURRENT_USER",
	payload: user,
});
