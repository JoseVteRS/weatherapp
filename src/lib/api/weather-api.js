// import { currentWeatherMapper } from "../mappers/weather-api.mapper";

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
    const url = `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=auto:ip&aqi=no&lang=es`;
    return await weatherFetch(url, signal);
};

export const getForecastWeather = async (signal) => {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=London&days=5&aqi=no&alerts=no`;
    return await weatherFetch(url, signal);
};

export const getWeatherConditionsInEnglish = async (signal) => {
    const url = `https://www.weatherapi.com/docs/weather_conditions.json`;
    return await weatherFetch(url, signal);
};
