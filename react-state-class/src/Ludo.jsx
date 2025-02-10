import { useState } from 'react';

//use object & arr in state

export default function Counter() {
  let [moves, setMoves] = useState({ blue: 0, Yellow: 0, Green: 0, Red: 0 }); //initialization
  let [arr, setArr] = useState(['start is empty']);

  let updateBlue = () => {
    // moves.blue += 1;
    console.log(`moves.blue = ${moves.blue}`);
    // setMoves(moves);

    //use spread operator
    // setMoves({ ...moves, blue: moves.blue + 1 }); //in there new value blue is depend on old value so use CallBack
    setMoves((currValue) => {
      return { ...currValue, blue: currValue.blue + 1 };
    });
  };

  let updateYellow = () => {
    console.log(`moves.yellow = ${moves.Yellow}`);
    setMoves((currValue) => {
      return { ...currValue, Yellow: currValue.Yellow + 2 };
    });
  };

  //   same consept in Array
  let updateRed = () => {
    setArr((arrValue) => {
      return [...arrValue, 'red is move'];
    });
    console.log(arr);
  };

  return (
    <div>
      <p>Game Begins!</p>
      <h3>{arr} </h3>
      <div>
        <p>Blue moves = {moves.blue}</p>
        <button style={{ backgroundColor: 'Blue' }} onClick={updateBlue}>
          +1
        </button>
        <p>Yellow moves = {moves.Yellow}</p>
        <button
          style={{ backgroundColor: 'Yellow', color: 'black' }}
          onClick={updateYellow}
        >
          +1
        </button>
        <p>Green moves = {moves.Green}</p>
        <button style={{ backgroundColor: 'Green' }}>+1</button>
        <p>Red moves = {moves.Red}</p>
        <button style={{ backgroundColor: 'Red' }} onClick={updateRed}>
          +1
        </button>
      </div>
    </div>
  );
}
