import { useEffect, useState } from "react";
import WeatherDayCard from "./weather-day-card";
import style from "./weather-week.module.css";

const WeatherWeek = () => {
    const [data, setData] = useState([]);
    const [grouped, setGoruped] = useState([]);

    useEffect(() => {
        const dataFnc = async () => {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?appid=c2a556a1ed3d58cdf3fc4e0b39fea992&q=Valencia&units=metric`);
            const resData = await res.json();
            setData(resData);
        };
        dataFnc();
    }, []);

    // console.log(dataAvg);
    avgTempByDate();
    return (
        <section>
            <div className={style.wrapper}>
                <WeatherDayCard date="Today" image="Clear" />
                <WeatherDayCard date="Today" image="Clouds" />
                <WeatherDayCard date="Today" image="LightCloud" />
                <WeatherDayCard date="Today" image="Clear" />
                <WeatherDayCard date="Today" image="Clear" />
            </div>
        </section>
    );
};

// Accepts the array and key
//* https://stackoverflow.com/questions/51040651/group-by-and-calculate-mean-average-of-properties-in-a-javascript-array

const avgTempByDate = () => {
    const myData = [
        { team: "GSW", pts: 120, ast: 18, reb: 11 },
        { team: "GSW", pts: 125, ast: 28, reb: 18 },
        { team: "GSW", pts: 110, ast: 35, reb: 47 },
        { team: "HOU", pts: 100, ast: 17, reb: 43 },
        { team: "HOU", pts: 102, ast: 14, reb: 32 },
        { team: "SAS", pts: 127, ast: 21, reb: 25 },
        { team: "SAS", pts: 135, ast: 25, reb: 37 },
        { team: "SAS", pts: 142, ast: 18, reb: 27 },
    ];

    // Calculate the sums and group data (while tracking count)
    const reduced = myData.reduce((m, d) => {
        if (!m[d.team]) {
            m[d.team] = { ...d, count: 1 };
            return m;
        }
        m[d.team].pts += d.pts;
        m[d.team].ast += d.ast;
        m[d.team].reb += d.reb;
        m[d.team].count += 1;
        return m;
    }, {});

    // Create new array from grouped data and compute the average
    const result = Object.keys(reduced).map(function (k) {
        const item = reduced[k];
        return {
            team: item.team,
            ast: item.ast / item.count,
            pts: item.pts / item.count,
            reb: item.reb / item.count,
        };
    });
    console.log(result);
    return result;
};

// const getForecastWeatherGroupedByDay = (array, key) => {
//     if (!array) return;
//     return array.reduce((result, currentValue) => {
//         (result[currentValue[key].split(" ")[0]] = result[currentValue[key].split(" ")[0]] || []).push(currentValue);
//         return result;
//     }, {});
// };

// const avgTemperaturesByDay = (data) => {
//     if (!data) return;
//     const reduced = getForecastWeatherGroupedByDay(data, "dt_txt");
//     const result = Object.keys(reduced).map((k) => {
//         const item = reduced[k];
//         console.log({ item });
//         return {
//             date: item.dt_txt,
//             avgTemp: item.main.temp / parseInt(item.length),
//         };
//     });
//     console.log(result);
//     return result;
// };

export default WeatherWeek;
