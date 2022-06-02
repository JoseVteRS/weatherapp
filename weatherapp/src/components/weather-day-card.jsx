import style from "./weather-day-card.module.css";

const IMAGE = {
    Clear: 'Clear',
    Hail: 'Hail',
    LightCloud: 'LightCloud',
    HeavyCloud: 'HeavyCloud',
    LightRain: 'LightRain',
    HeavyRain: 'HeavyRain',
    Sleet: 'Sleet',
    Snow: 'Snow',
    Thunderstorm: 'Thunderstorm',

}

const WeatherDayCard = ({ date, image, maxTemp, minTemp }) => {
    return (
        <div className={style.card}>
            <h2>{date}</h2>

            <div className={style.imgWrapper}>
                <img src={`/src/public/images/${IMAGE[image]}.png`} />
            </div>

            <div className={style.tempWrapper}>
                <p className={style.maxTemp}>{maxTemp} ºC</p>
                <p className={style.minTemp}>{minTemp} ºC</p>
            </div>
        </div>
    );
};

export default WeatherDayCard;
