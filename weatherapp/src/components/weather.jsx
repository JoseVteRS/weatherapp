import { useCurrentWeather } from "../lib/hooks/use-current-weather";
import Button from "./elements/button";
import LocationIcon from "./icons/location-icon";
import style from "./weather.module.css";

const Weather = () => {
    const { weather, weatherError, weatherLoading } = useCurrentWeather();

    if (weatherError) return <div>Error</div>;
    if (weatherLoading) return <div>Cargando el tiempo</div>;

    return (
        <div className={style.wrapper}>
            <Button label="Search for places" onClick={() => console.log("Click Search for places")} />

            <div className={style.temperature}>
                {weather.main.temp} <span>ºC</span>
            </div>

            <div className={style.description}>{weather.weather[0].description}</div>

            <div className={style.dateCityWrapper}>
                <div className={style.date}>Hoy - Miercoles, 01 de Junio</div>
                <div className={style.city}>
                    <LocationIcon className={style.cityIcon} /> {weather.name}
                </div>
            </div>
        </div>
    );
};

export default Weather;
