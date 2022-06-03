import { formatDate } from "../lib/format-date";
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
                {weather.current.temp_c} <span>ºC</span>
            </div>

            <div>
                <img src={weather.current.condition.icon} alt="" />
            </div>

            <div className={style.description}>{weather.current.condition.text}</div>

            <div className={style.dateCityWrapper}>
                <div className={style.date}>Hoy ▪ {formatDate(weather.location.localtime)}</div>
                <div className={style.city}>
                    <LocationIcon className={style.cityIcon} /> {weather.location.name}
                    {weather.location.region}
                </div>
            </div>
        </div>
    );
};

export default Weather;
