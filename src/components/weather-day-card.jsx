import LightRain from "../public/images/LightRain.png";
import style from "./weather-day-card.module.css";

const WeatherDayCard = () => {
    return (
        <div className={style.card}>
            <h2>Tomorrow</h2>

            <div className={style.imgWrapper}>
                <img src={LightRain} />
            </div>

            <div className={style.tempWrapper}>
                <p className={style.maxTemp}>16 ºC</p>
                <p className={style.minTemp}>16 ºC</p>
            </div>
        </div>
    );
};

export default WeatherDayCard;
