import React from "react";
import "./Layout.scss";

const CustomLayout = (props) => {

    return (
        <div className="box-center">
            {props.children}
        </div>
    );
};

export default CustomLayout;
