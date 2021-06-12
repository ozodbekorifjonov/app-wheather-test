import React from "react";
import "./WeatherCard.scss";
import {DateToDay, TempToCelsius, WeatherImage} from "../general";
import {Link} from "react-router-dom";

export function WeatherCard(props) {

    const {list} = props;

    return (
        <>
            {list && list.map((item, i) => (
                <div key={i} className="card">
                    <Link to={`/day/${DateToDay(item.date_temp).toLowerCase()}`}>
                        <p className="day-title">
                            {DateToDay(item.date_temp)}
                        </p>
                        <h5>{item.date_temp}</h5>
                        <img src={WeatherImage(item.weather)} alt="sunny"/>
                        <div className="text-line">
                    <span className="text-bold">
                        {item?.max_temp.toFixed(0)}&#176;
                    </span>
                            <span className="text-light">
                        {Math.floor(item?.min_temp)}&#176;
                    </span>
                        </div>
                    </Link>
                </div>
            ))}
        </>
    )
}
