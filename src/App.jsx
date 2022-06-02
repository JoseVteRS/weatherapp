import WeatherWeek from "./components/weather-week.jsx";
import Weather from "./components/weather.jsx";

import MainLayout from "./layouts/main-layout.jsx";

function App() {
    return (
        <MainLayout>
            <Weather />
            <WeatherWeek />
        </MainLayout>
    );
}

export default App;
