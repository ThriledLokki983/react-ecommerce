/** @format */

import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [];

if (process.env.NODE_ENV === "development") {
	middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));
const persistor = persistStore(store);

export { store, persistor };

// export default () => {
//     let store = createStore(rootReducer, applyMiddleware(...middlewares));
//     let persister = persistStore(store);
//     return {store, persister}
// };
