import React from "react";
import "./WeatherCard.scss";
import {WeatherImage} from "../general";

export function WeatherCard(props) {
    return (
        <>
            <div className="card">
                <p className="day-title">Mon</p>
                <img src={WeatherImage('sunny')} alt="sunny"/>
                <div className="text-line">
                    <span className="text-bold">
                        36&#176;
                    </span>
                    <span className="text-light">
                        -20&#176;
                    </span>
                </div>
            </div>
            <div className="card">
                <p className="day-title">Mon</p>
                <img src={WeatherImage('rainy')} alt="sunny"/>
                <div className="text-line">
                    <span className="text-bold">
                        36&#176;
                    </span>
                    <span className="text-light">
                        -20&#176;
                    </span>
                </div>
            </div>
            <div className="card">
                <p className="day-title">Mon</p>
                <img src={WeatherImage('cloudy')} alt="sunny"/>
                <div className="text-line">
                    <span className="text-bold">
                        36&#176;
                    </span>
                    <span className="text-light">
                        -20&#176;
                    </span>
                </div>
            </div>
            <div className="card">
                <p className="day-title">Mon</p>
                <img src={WeatherImage('snowy')} alt="sunny"/>
                <div className="text-line">
                    <span className="text-bold">
                        36&#176;
                    </span>
                    <span className="text-light">
                        -20&#176;
                    </span>
                </div>
            </div>
            <div className="card">
                <p className="day-title">Mon</p>
                <img src={WeatherImage('sunny')} alt="sunny"/>
                <div className="text-line">
                    <span className="text-bold">
                        36&#176;
                    </span>
                    <span className="text-light">
                        -20&#176;
                    </span>
                </div>
            </div>
        </>
    )
}
