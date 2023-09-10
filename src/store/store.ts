import { applyMiddleware, compose, createStore, Middleware } from "redux";
import storage from "redux-persist/lib/storage";
import { PersistConfig, persistReducer, persistStore } from "redux-persist";
import { rootReducer } from "./root-reducer";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";

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
  key: "root",
  storage,
  whitelist: ["movieApi"], // `whitelist` olarak düzeltilmiş
};

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
