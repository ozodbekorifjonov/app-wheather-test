import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchWeatherData, recipesSelector} from "../../slices/recipes";
import {Header} from "../header/Header";
import {WeatherCard} from "../weather-card/WeatherCard";

const Home = () => {

    const dispatch = useDispatch()
    const [cityName, setCityName] = useState("California")
    const {weatherData, searchResult} = useSelector(recipesSelector)

    useEffect(() => {
        dispatch(fetchWeatherData(searchResult ? searchResult : cityName))
    }, [dispatch])

    const changeCityName = (name) => {
        setCityName(name)
    }

    return (
        <>
            <Header changeCityName={changeCityName} weatherData={weatherData} cityName={cityName}/>
            <div className="d-flex-justify-center-row">
                <WeatherCard list={weatherData.list} cityName={cityName}/>
            </div>
        </>
    )
}

export default Home;
