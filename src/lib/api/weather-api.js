// import { currentWeatherMapper } from "../mappers/weather-api.mapper";

export const getCurrentWeather = async (signal) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=valencia&units=metric&lang=es&appid=430e09dc1d6aba994678f3c610679363`;

    try {
        const res = await fetch(url, { signal });
        let weather;
        if (res.ok) weather = await res.json();

        return {
            data: weather,
            error: !res.ok,
            aborted: false,
        };
    } catch (error) {
        const isAborted = error.name === "AbortError";
        return {
            weather: undefined,
            error: !isAborted,
            aborted: isAborted,
        };
    }
};
