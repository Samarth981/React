import './Title.css';
function Title() {
  let name = 'samrth';
  return (
    <div className="title">
      <h1>Hii, Welcome to {name.toUpperCase()} project</h1>
      <p>2 * 2 = {2 * 2}</p>
      <p>
        This is my first example and you can also mathemetical problem solved in
        ther
      </p>
    </div>
  );
}

export default Title;
