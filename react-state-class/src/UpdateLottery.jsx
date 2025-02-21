import { useState } from 'react';
import { createTickit, sum } from './helper.js';
import Ticket from './Ticket.jsx';

// export default function UpdateLottery({ n, winningSum }) {
//   let [ticket, setTicket] = useState(createTickit(n));
//   let isWinning = sum(ticket) === winningSum;

//   let byTicket = () => {
//     setTicket(createTickit(n));
//   };
//   return (
//     <div>
//       <h1>Lottery game</h1>
//       <Ticket ticketArr={ticket} />
//       <button onClick={byTicket}>ByNew tickit</button>
//       <h3>{isWinning && 'Congratulations! You won!'}</h3>
//     </div>
//   );
// }

//use function as prop
export default function UpdateLottery({ n, winningCondition }) {
  let [ticket, setTicket] = useState(createTickit(n));
  let isWinning = winningCondition(ticket);

  let byTicket = () => {
    setTicket(createTickit(n));
  };
  return (
    <div>
      <h1>Lottery game</h1>
      <Ticket ticketArr={ticket} />
      <button onClick={byTicket}>ByNew tickit</button>
      <h3>{isWinning && 'Congratulations! You won!'}</h3>
    </div>
  );
}
