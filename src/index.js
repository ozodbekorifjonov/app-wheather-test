import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {App} from "./App";
import {configureStore} from '@reduxjs/toolkit'
import "./styles/_global.scss";
import 'react-toastify/dist/ReactToastify.css';
import rootReducer from './slices'

const store = configureStore({reducer: rootReducer})

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
);
