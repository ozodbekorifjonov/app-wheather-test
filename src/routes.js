import React from "react";
import {Route} from "react-router-dom";
import Hoc from "./hoc/hoc";
import {Home} from "./components/home/Home";

const BaseRouter = () => (
    <Hoc>
        <Route path="/" exact render={() => <Home/>}/>
    </Hoc>
);

export default BaseRouter;
