import './ActEliment.css';
import Price from './priceOfcard.jsx';
function ActEliment({ Title, idx }) {
  let oldPrice = ['599', '1,499', '2,199', '999'];
  let newPrice = ['499', '1,299', '1,999', '899'];
  let desc = [
    ['8,000 DPI', '5 programable button'],
    ['good surface', 'working well'],
    ['smooth work', 'coler is atrective'],
    ['fast and chip', 'one of the best product'],
  ];
  return (
    <div className="product">
      <h3>{Title}</h3>
      <p>{desc[idx][0]}</p>
      <p>{desc[idx][1]}</p>
      <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
    </div>
  );
}

export default ActEliment;
