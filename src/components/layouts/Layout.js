import React from "react";
import {Header} from "../header/Header";
import "./Layout.scss";

const CustomLayout = (props) => {

    return (
        <div className="box-center">
            <Header/>
        {props.children}
        </div>
    );
};

export default CustomLayout;
