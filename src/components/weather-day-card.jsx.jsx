import React from 'react'
import { useFetchWeather } from '../hooks/useFetchWather'

const WeatherDayCard = () => {


    const { weather } = useFetchWeather('valencia')


    return (
        <div>{JSON.stringify(weather, null, 2)}</div>
    )
}

export default WeatherDayCard