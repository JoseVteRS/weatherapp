import { useEffect, useState } from "react"
import { BASE_URL } from "../lib/constants/weather"






export const useFetchWeather = (city) => {

    const [weather, setWeather] = useState([])

    console.log(weather);

    useEffect(() => {
        const getWeather = async () => {
            const url = `${BASE_URL}/weather?q=${city}&appid=430e09dc1d6aba994678f3c610679363`
            const options = {
                method: 'GET'
            }
            const response = await fetch(url, options)
            const data = await response.json()
            setWeather(data)
        }
        getWeather()

    }, [city])

    return {
        weather,
        setWeather
    }

}