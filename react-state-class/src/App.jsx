import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Counter from './Counter.jsx';
import Likebtn from './Likebtn.jsx';
import Ludo from './Ludo.jsx';
import Tudo from './Tudo.jsx';
import Lottery from './Lottery.jsx';
import UpdateLottery from './UpdateLottery.jsx';
import { sum } from './helper.js';
import Form from './Form.jsx';
import CommentForm from './CommentForm.jsx';
import CommentShow from './CommentShow.jsx';
import UseEffect from './UseEffect.jsx';
import Jocker from './Jocker.jsx';
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

// function App() {
//   return (
//     <>
//       <Ludo />
//       <Tudo />
//       <Lottery />
//     </>
//   );
// }

// function App() {
//   return (
//     <>
//       <Ticket ticketArr={[0, 1, 2]} />
//     </>
//   );
// }

// function App() {
//   let winningCondition = (ticketArr) => {
//     return sum(ticketArr) === 15;
//   };
//   return (
//     <>
//       <UpdateLottery n={3} winningCondition={winningCondition} />
//     </>
//   );
// }

// function App() {
//   return (
//     <>
//       <Form />
//     </>
//   );
// }

// function App() {
//   return (
//     <>
//       {/* <CommentForm /> */}
//       <CommentShow />
//     </>
//   );
// }

// function App() {
//   return (
//     <>
//       <UseEffect />
//     </>
//   );
// }

function App() {
  return (
    <>
      <Jocker />
    </>
  );
}

export default App;
