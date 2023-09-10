<<<<<<< HEAD:src/store/store.ts
import { applyMiddleware, compose, createStore, Middleware } from "redux";
import { rootReducer } from "./root-reducer";
import storage from "redux-persist/lib/storage";
import { PersistConfig, persistReducer, persistStore } from "redux-persist";
=======
import { rootReducer } from "./root-reducer";
import { configureStore } from "@reduxjs/toolkit";
>>>>>>> 258e4a091cf750ab15ad3c8deeccfab72e6a0274:src/store/store.js
import logger from "redux-logger";

<<<<<<< HEAD:src/store/store.ts
export type RootState = ReturnType<typeof rootReducer>;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

type ExtendedWindow = PersistConfig<RootState> & {
  whitelist: (keyof RootState)[];
};

const middleWares = [
  process.env.NODE_ENV !== "products" && logger,
  thunk,
].filter((middleware): middleware is Middleware => Boolean(middleware));

const persistConfig: ExtendedWindow = {
=======
const middleWares = [process.env.NODE_ENV !== "products" && logger].filter(
  Boolean
);

/* const persistConfig = {
>>>>>>> 258e4a091cf750ab15ad3c8deeccfab72e6a0274:src/store/store.js
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
