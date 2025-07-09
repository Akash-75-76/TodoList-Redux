import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 4,
    temp: 5,
    tempMin: 2,
    tempMax: 7,
    humidity: 20,
    weather: "snow",
  });

  let updateInfo = (newinfo) => {
    setWeatherInfo(newinfo);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather app by delta</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
