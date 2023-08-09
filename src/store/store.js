import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./root-reducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import logger from "redux-logger";
import thunk from "redux-thunk";

const middleWares = [
  process.env.NODE_ENV !== "products" && logger,
  thunk,
].filter(Boolean);

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["movieApi"], // `whitelist` olarak düzeltilmiş
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancers = compose(applyMiddleware(...middleWares, thunk));
export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
