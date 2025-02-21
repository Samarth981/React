import { useState, useEffect } from 'react';
// export default function UseEffect() {
//   let [counter, setCounter] = useState(0);

//   let incress = () => {
//     setCounter((currcounter) => currcounter + 1);
//   };

//   useEffect(function print() {
//     console.log('this is side-effeects');
//   });
//   return (
//     <div>
//       <h3>count = {counter}</h3>
//       <button onClick={incress}>Increase</button>
//     </div>
//   );
// }

//as dependency in useEffect()

export default function UseEffect() {
  let [counterX, setCounterX] = useState(0);
  let [counterY, setCounterY] = useState(0);

  let incressX = () => {
    setCounterX((currcounter) => currcounter + 1);
  };

  let incressY = () => {
    setCounterY((currcounter) => currcounter + 1);
  };

  useEffect(
    function print() {
      console.log('this is side-effeects');
    },
    [counterY],
  );
  return (
    <div>
      <h3>count = {counterX}</h3>
      <button onClick={incressX}>Increase</button>
      <h3>count = {counterY}</h3>
      <button onClick={incressY}>Increase</button>
    </div>
  );
}
