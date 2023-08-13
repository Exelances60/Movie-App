import { rootReducer } from "./root-reducer";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

const middleWares = [process.env.NODE_ENV !== "products" && logger].filter(
  Boolean
);

/* const persistConfig = {
  key: "root",
  storage,
  whitelist: ["movieApi"], // `whitelist` olarak düzeltilmiş
}; */

/* const persistedReducer = persistReducer(persistConfig, rootReducer);
 */
/* const composedEnhancers = compose(applyMiddleware(...middleWares, thunk)); */
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleWares),
});

/* export const persistor = persistStore(store);
 */
