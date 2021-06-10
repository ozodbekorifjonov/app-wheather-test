import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import BaseRouter from "./routes";
import CustomLayout from "./components/layouts/Layout";

export function App(props) {
    return (
        <Router>
            <CustomLayout {...props}>
                <BaseRouter/>
            </CustomLayout>
        </Router>
    )
}
