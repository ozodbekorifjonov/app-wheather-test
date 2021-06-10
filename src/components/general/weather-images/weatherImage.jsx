import sunny from "../../../images/001-sun.svg";
import rainy from "../../../images/002-rain.svg";
import cloudy from "../../../images/003-cloudy.svg";
import snowy from "../../../images/004-snowy.svg";

export const WeatherImage = (image) => {
    switch (image) {
        case 'sunny':
            return sunny;
        case 'rainy':
            return rainy;
        case 'cloudy':
            return cloudy;
        case 'snowy':
            return snowy;
        default:
            return null
    }
}
