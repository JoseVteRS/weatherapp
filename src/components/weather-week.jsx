import WeatherDayCard from "./weather-day-card";
import style from "./weather-week.module.css";

const WeatherWeek = () => {
    return (
        <div className={style.wrapper}>
            <WeatherDayCard />
            <WeatherDayCard />
            <WeatherDayCard />
            <WeatherDayCard />
            <WeatherDayCard />
        </div>
    );
};

export default WeatherWeek;
