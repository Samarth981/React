import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Counter from './Counter.jsx';
import Likebtn from './Likebtn.jsx';
import Ludo from './Ludo.jsx';
import Tudo from './Tudo.jsx';
import Lottery from './Lottery.jsx';
import './App.css';

// function App() {
//   return (
//     <>
//       <div>
//         <Counter />
//         <br />
//         <Likebtn />
//       </div>
//     </>
//   );
// }

function App() {
  return (
    <>
      {/* <Ludo /> */}
      {/* <Tudo /> */}
      <Lottery />
    </>
  );
}

export default App;
