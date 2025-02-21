import TicketNum from './TicketNum.jsx';
import './Ticket.css';

export default function Ticket({ ticketArr }) {
  return (
    <div className="Ticket">
      {ticketArr.map((num, idx) => (
        <TicketNum num={num} key={idx} />
      ))}
    </div>
  );
}
