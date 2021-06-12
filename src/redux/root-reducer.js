/**
 * The main code that combines all other states together
 * All reducers will come into this reducer
 * Bring in all other reducer
 * @format
 */

import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage as default storage

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["cart"],
};

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
	directory: directoryReducer,
	shop: shopReducer,
});

/**
 * Pulling all reducers user the combineReducer() method which will return one giant root-reducer
 * which are properly bound with all the redux reducers we need.
 */
export default persistReducer(persistConfig, rootReducer);
