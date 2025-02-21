import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Sample from './Sample.jsx';
// import SearchBox from './SearchBox.jsx';
// import InfoBox from './InfoBox.jsx';
import WeatherApp from './WeatherApp.jsx';

import './App.css';

// function App() {
//   return (
//     <>
//       {/* <Sample /> */}
//       <SearchBox />
//       <InfoBox />
//     </>
//   );
// }

function App() {
  return (
    <>
      <WeatherApp />
    </>
  );
}

export default App;
