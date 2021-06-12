export const DailyForecast = (data, req) => {

    let list = data.list.filter(a => a.dt_txt.startsWith(req));

    return {
        cityData: {
            name: data.city.name,
            country: data.city.country,
        },
        list
    };

}
