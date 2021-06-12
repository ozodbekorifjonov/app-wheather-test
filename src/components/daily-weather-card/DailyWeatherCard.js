import React from "react";
import {DateToDay, WeatherImage} from "../general";

export function DailyWeatherCard(props) {

    const {list} = props;

    return (
        <>
            {list && list.map((item, i) => (
                <div key={i} className="card">

                    <h4>
                        {item?.dt_txt.substring(0, item?.dt_txt.indexOf(" "))}
                    </h4>

                    <p className="day-title">
                        {item?.dt_txt.substring(item?.dt_txt.indexOf(" "), item?.dt_txt.indexOf(" ") + 6)}
                    </p>
                    <img src={WeatherImage(item?.weather[0].main)} alt="sunny"/>
                    <div className="text-line">
                            <span className="text-bold">
                                {item?.main.temp_max.toFixed(0)}&#176;
                            </span>
                        <span className="text-light">
                             {Math.floor(item?.main.temp_min)}&#176;
                    </span>
                    </div>
                </div>
            ))}
        </>
    )
}
