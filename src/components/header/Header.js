import React, {useEffect, useRef, useState} from "react";
import "./Header.scss";
import search from "../../images/search.svg";
import Skeleton from 'react-loading-skeleton';
import {useDispatch} from "react-redux";
import {fetchWeatherData} from "../../slices/recipes";

export function Header(props) {

    const searchRef = useRef();
    const {cityName, changeCityName, weatherData} = props;
    const dispatch = useDispatch();

    useEffect(() => {
        if (searchRef.current) {
            searchRef.current.focus();
        }
    }, []);

    const handleChange = (e) => {
        changeCityName(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (cityName !== "") {
            dispatch(fetchWeatherData(cityName))
        }
    };

    return (
        <div className="header">
            <div>
                <form onSubmit={handleSubmit} noValidate autoComplete="off" className="form">
                    <div className="d-flex">
                        <input ref={searchRef} onChange={handleChange} name="search"
                               className="w-100"
                               placeholder="Search..."/>
                        <button className="search-btn" disabled={!cityName}>
                            <img src={search} alt="search"/>
                        </button>
                    </div>
                </form>
            </div>
            <h2 className="city-title">{weatherData.cityData ? weatherData.cityData.name + `,` :
                <Skeleton width={100}/>} {weatherData.cityData ? weatherData.cityData.country :
                <Skeleton width={20}/>}</h2>
        </div>
    )
}
