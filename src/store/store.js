import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import rootReducer from "./root-reducer";
import {logger} from "redux-logger/src";

const middleware = [...getDefaultMiddleware()];

export default configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});
