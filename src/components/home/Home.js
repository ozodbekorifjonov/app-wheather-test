import React from "react";
import "./Home.scss";
import {useDispatch, useSelector} from "react-redux";
import {WeatherCard} from "../weahter-card/WeatherCard";

export function Home(props) {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <div className="d-flex-justify-center-row">
                <WeatherCard/>
            </div>
        </div>
    )
}
