export const DataByDay = (data) => {

    const resData = [];

    const forecast = data.list.reduce(function (obj, value) {
        let key = value.dt_txt.substring(0, value.dt_txt.indexOf(" "));
        if (obj[key] == null) obj[key] = [];
        obj[key].push(value);
        return obj;
    }, {});

    for (const forecastElement in forecast) {
        const newArray = forecast[forecastElement]

        let max_temp = 0;
        let min_temp = Number.POSITIVE_INFINITY;
        let date_temp = '';
        let weather = '';

        for (let i = 0; i < newArray.length; i++) {

            if (max_temp < newArray[i].main.temp_max) {
                max_temp = newArray[i].main.temp_max;
            }

            let tmp = newArray[i].main.temp_min;
            if (tmp < min_temp) min_temp = tmp;

            date_temp = newArray[0].dt_txt.substring(0, newArray[0].dt_txt.indexOf(" "));
            weather = newArray[i].weather[0].main

        }

        const tempObj = {
            max_temp,
            min_temp,
            date_temp,
            weather
        }

        resData.push(tempObj)
    }

    return {
        list: resData,
        cityData: {
            name: data.city.name,
            country: data.city.country,
        }
    };
}
