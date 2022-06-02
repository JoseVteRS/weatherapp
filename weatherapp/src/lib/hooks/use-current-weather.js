import { useEffect, useState } from "react";
import { getCurrentWeather } from "../api/weather-api";

export const useCurrentWeather = () => {
    const [weather, setWeather] = useState({
        data: [],
        error: false,
        loading: true,
    });

    const setData = (newData) => setWeather({ data: newData, loading: false, error: false });
    const setError = () => setWeather({ data: [], loading: false, error: true });

    useEffect(() => {
        const controller = new AbortController();

        loadWeather(setData, setError, controller.signal);

        return () => controller.abort();
    }, []);

    return {
        weather: weather.data,
        weatherError: weather.error,
        weatherLoading: weather.loading,
    };
};

const loadWeather = async (setData, setError, signal) => {
    const { data, aborted } = await getCurrentWeather(signal);

    if (aborted) return;
    if (data) setData(data);
    else setError();
};
