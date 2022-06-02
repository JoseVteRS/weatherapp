import WeatherDayCard from "./weather-day-card";
import style from "./weather-week.module.css";

const WeatherWeek = () => {
    return (
        <div className={style.wrapper}>
            <WeatherDayCard date="Today" image="Clear" />
            <WeatherDayCard date="Today" image="Clouds" />
            <WeatherDayCard date="Today" image="LightCloud" />
            <WeatherDayCard date="Today" image="Clear" />
            <WeatherDayCard date="Today" image="Clear" />
        </div>
    );
};

export default WeatherWeek;
