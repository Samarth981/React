import { useState } from 'react';
import { createTickit, sum } from './helper.js';
import './Lottery.css';
export default function Lottery() {
  const [tickit, setTickit] = useState(createTickit(3));
  let isWinning = sum(tickit) === 15;

  let byTicket = () => {
    setTickit(createTickit(3));
  };
  return (
    <div>
      <h1>Lottery game</h1>
      <div className="tickit">
        <span>{tickit[0]}</span>
        <span>{tickit[1]}</span>
        <span>{tickit[2]}</span>
      </div>
      <button onClick={byTicket}>ByNew tickit</button>
      <h3>{isWinning && 'Congratulations! You won!'}</h3>
    </div>
  );
}
