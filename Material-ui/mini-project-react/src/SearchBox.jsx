import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import './SearchBox.css';
export default function searchBox({ updateInfo }) {
  let [city, setCity] = useState('');
  let [error, setError] = useState(false);
  const API_URL = ' https://api.openweathermap.org/data/2.5/weather';
  const API_Key = '6e630ec94be6204e9cc285971b922ab4';

  let getWeatherInfo = async () => {
    try {
      let result = await fetch(
        `${API_URL}?q=${city}&appid=${API_Key}&units=metric`,
      ); //check https://openweathermap.org/current (Built-in API request by city name)
      let JsonResult = await result.json();
      console.log(JsonResult); //lon and lat coming through Geocoding API

      let ResultObj = {
        city: city,
        temp: JsonResult.main.temp,
        tempMin: JsonResult.main.temp_min,
        tempMax: JsonResult.main.temp_max,
        humidity: JsonResult.main.humidity,
        feelslike: JsonResult.main.feels_like,
        weather: JsonResult.weather[0].description,
      };
      console.log(ResultObj);
      return ResultObj;
    } catch (error) {
      throw error;
    }
  };

  let handleChange = (e) => {
    setCity(e.target.value);
  };

  let submitChnage = async (e) => {
    try {
      e.preventDefault();
      console.log(city);
      setCity('');
      let NewInfo = await getWeatherInfo();
      updateInfo(NewInfo); //after submit send info in weatherApp.jsx
      setError(false);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="searchBox">
      <form onSubmit={submitChnage}>
        <TextField
          id="city"
          label="Search City"
          variant="standard"
          value={city}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
      {error && (
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="error">
          No search place is exists
        </Alert>
      )}
    </div>
  );
}
