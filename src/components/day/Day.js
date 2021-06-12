import React, {useEffect} from "react";
import "./Day.scss";
import {Link, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {clearDailyData, dailySelector, fetchDailyData} from "../../slices/daily";
import Title from "../title/Title";
import {DailyWeatherCard} from "../daily-weather-card/DailyWeatherCard";
import {recipesSelector} from "../../slices/recipes";
import arrow from "../../images/arrow.svg";

export function Day() {

    const location = useLocation();
    const dispatch = useDispatch();
    const {searchResult} = useSelector(recipesSelector)
    const {cityName, date_temp} = location.state.params;

    useEffect(() => {

        dispatch(fetchDailyData(searchResult ? searchResult : cityName, date_temp))

    }, [dispatch]);

    const {dailyData} = useSelector(dailySelector);

    const handleClick = () => {
        dispatch(clearDailyData())
    }

    return (
        <>
            <Link className="link" to="/"><h4 onClick={handleClick}><img width={12} src={arrow} alt="arrow"/> Home</h4>
            </Link>
            <div className="day">
                <Title weatherData={dailyData}/>
                <div className="d-flex-justify-center-row">
                    <DailyWeatherCard list={dailyData.list}/>
                </div>
            </div>
        </>
    )
}
