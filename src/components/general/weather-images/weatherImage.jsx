import sunny from "../../../images/001-sun.svg";
import rainy from "../../../images/002-rain.svg";
import cloudy from "../../../images/003-cloudy.svg";
import snowy from "../../../images/004-snowy.svg";
import defaultImage from "../../../images/default.svg";

export const WeatherImage = (weather) => {

    switch (weather) {
        case 'Clear':
            return sunny;
        case 'Rain':
            return rainy;
        case 'Clouds':
            return cloudy;
        case 'Snow':
            return snowy;
        default:
            return defaultImage;
    }
}
