import React from 'react'
import Skeleton from "react-loading-skeleton";

const Title = (props) => {

    const {weatherData} = props;

    return (
        <>
            <h2 className="city-title">{weatherData.cityData ? weatherData.cityData.name + `,` :
                <Skeleton width={100}/>} {weatherData.cityData ? weatherData.cityData.country :
                <Skeleton width={20}/>}</h2>
        </>
    )
}

export default Title;
