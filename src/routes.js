import React from "react";
import {Route} from "react-router-dom";
import Hoc from "./hoc/hoc";
import Home from "./components/home/Home";
import {Day} from "./components/day/Day";

const BaseRouter = () => (
    <Hoc>
        <Route path="/" exact render={() => <Home/>}/>
        <Route path="/day/:id">
            <Day/>
        </Route>
    </Hoc>
);

export default BaseRouter;
