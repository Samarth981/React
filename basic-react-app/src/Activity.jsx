import ActEliment from './ActEliment.jsx';

function Activity() {
  let styles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alineItem: 'center',
  };
  return (
    <div style={styles}>
      <ActEliment Title="Logitech MX Master" idx={0} />
      <ActEliment Title="Apple pencil" idx={1} />
      <ActEliment Title="idea pad S145" idx={2} />
      <ActEliment Title="Intel" idx={3} />
    </div>
  );
}
export default Activity;
