import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import BaseRouter from "./routes";
import CustomLayout from "./components/layouts/Layout";
import {ToastContainer} from "react-toastify";

export function App(props) {
    return (
        <Router>
            <ToastContainer
                position="top-right"
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <CustomLayout {...props}>
                <BaseRouter/>
            </CustomLayout>
        </Router>
    )
}
