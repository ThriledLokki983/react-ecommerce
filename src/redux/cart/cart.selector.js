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
 * Selects the hidden property as well
 */
export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems);

export const selectCartHidden = createSelector([selectCart], (cart) => cart.hidden);

/**
 * Select the accumulated number of items in the cart
 */
export const selectCartItemCount = createSelector([selectCartItems], (cartItems) =>
	cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
	cartItems.reduce((acc, cartItem) => acc + cartItem.quantity * cartItem.price, 0)
);
