// import { currentWeatherMapper } from "../mappers/weather-api.mapper";

import { BASE_URL } from "../constants/weather";

const weatherFetch = async (url, signal) => {
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

export const getCurrentWeather = async (signal) => {
    const url = `${BASE_URL.openWeatherApiUrl}`;
    return await weatherFetch(url, signal);
};

export const getForecastWeather = async (signal) => {
    const url = `${BASE_URL.openWeatherApiUrl}`;
    return await weatherFetch(url, signal);
};

export const getWeatherConditionsInEnglish = async (signal) => {
    const url = `https://www.weatherapi.com/docs/weather_conditions.json`;
    return await weatherFetch(url, signal);
};
