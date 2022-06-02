export const currentWeatherMapper = (weatherObject) => {
    if (!weatherObject) return;

    return {
        id: weatherObject.sys.id || undefined,
        weather: {
            id: weatherObject.weather[0].id,
            main: weatherObject.weather[0].main,
            description: weatherObject.weather[0].description,
        },
        data: {
            temperatures: {
                temperature: weatherObject.main.temp,
                tempMin: weatherObject.main.temp_min,
                tempMax: weatherObject.main.temp_max,
            },
            wind: {
                speed: weatherObject.wind.speed,
                deg: weatherObject.wind.deg,
            },
        },
        city: {
            name: weatherObject.name,
        },
    };
};
