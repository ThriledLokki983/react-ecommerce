/** @format */

import { createSelector } from "reselect";

/**
 *
 * @param {*} state
 * @returns Cart from the state
 */
const selectCart = (state) => state.cart;

/**
 * Selects the cartItems from the big state --- cart
 */
export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems);

/**
 * Select the accumulated number of items in the cart
 */
export const selectCartItemCount = createSelector([selectCartItems], (cartItems) =>
	cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);
