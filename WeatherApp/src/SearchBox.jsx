import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox() {
  const API_KEY = "5856e7ab8f9768a4de308a22b0e4b2d9";
  const url = "https://api.openweathermap.org/data/2.5/weather";

  const [city, setCity] = useState("");

  const handleChange = (evt) => {
    setCity(evt.target.value);
  };

  const getWeatherInfo = async (cityName) => {
    try {
      const response = await fetch(
        `${url}?q=${encodeURIComponent(cityName)}&appid=${API_KEY}&units=metric`
      );
      const jsonResponse = await response.json(); 
      let result = {
  temp: jsonResponse.main.temp,
  tempMin: jsonResponse.main.temp_min,
  tempMax: jsonResponse.main.temp_max,
  humidity: jsonResponse.main.humidity,
  feelsLike: jsonResponse.main.feels_like,
  weather: jsonResponse.weather[0].description,
};

console.log(result);

    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
    
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(city);
    getWeatherInfo(city); // ✅ fix here
    setCity("");
  };

  return (
    <div className="SearchBox">
      <h3>Search for the weather</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
