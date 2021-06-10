import React from "react";
import {Route} from "react-router-dom";
import Hoc from "./hoc/hoc";
import {Home} from "./components/home/Home";
import {Day} from "./components/day/Day";

const BaseRouter = () => (
    <Hoc>
        <Route path="/" exact render={() => <Home/>}/>
        <Route path="/day">
            <Day/>
        </Route>
        {/*<Route path='/book/:id' render={(props) => {*/}
        {/*    return (<Day {...props} />)*/}
        {/*}}/>*/}

    </Hoc>
);

export default BaseRouter;
