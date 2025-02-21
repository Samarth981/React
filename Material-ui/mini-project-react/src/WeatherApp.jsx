import SearchBox from './SearchBox.jsx';
import InfoBox from './InfoBox.jsx';
import { useState } from 'react';

export default function WeatherApp() {
  let [weatherInfo, serweatherInfo] = useState({
    city: 'surat',
    feelslike: 28.51,
    humidity: 39,
    temp: 28.51,
    tempMax: 28.99,
    tempMin: 28.99,
    weather: 'smoke',
  });

  let updateInfo = (NewInfo) => {
    serweatherInfo(NewInfo); //SearchBox.jsx  line 39
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>WeatherApp</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox weatherInfo={weatherInfo} />
    </div>
  );
}
