import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counter from "./counter";
import { createLogger } from "redux-logger";

const rootReducer = combineReducers({ counter });

const logger = createLogger();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

export default store;
