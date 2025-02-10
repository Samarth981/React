// export default function Counter() {
//   let count = 0;

//   function incounter() {
//     count += 1;
//     console.log(count);
//   }
//   return (
//     <div>
//       <h3>count = {count}</h3>
//       <button onClick={incounter}>Increase</button>
//     </div>
//   );
// }

//State and hook concept for useStack()
// import { useState } from 'react';

// export default function Counter() {
//   let [counter, setCounter] = useState(0); //initialization

//   console.log('Component is render');

//   console.log(`count = ${counter}`);

//   let incount = () => {
//     setCounter(counter + 1);
//     console.log(`inside incount, count = ${counter}`); // 'this is check Re-render working flow, like check all line Re-exicuted only initialization line not exicute'
//   };
//   return (
//     <div>
//       <h3>count = {counter}</h3>
//       <button onClick={incount}>Increase</button>
//     </div>
//   );
// }

// CallBack concept
import { useState } from 'react';

export default function Counter() {
  let [counter, setCounter] = useState(0); //initialization

  let incount = () => {
    // setCounter(counter + 1);
    // setCounter(counter+1);
    setCounter((currCount) => {
      return currCount + 1;
    });
    setCounter((currCount) => {
      return currCount + 1;
    });
  };
  return (
    <div>
      <h3>count = {counter}</h3>
      <button onClick={incount}>Increase</button>
    </div>
  );
}

//more about state

//if state variable is mot change then re-render is not work
// import { useState } from 'react';

// export default function Counter() {
//   let [counter, setCounter] = useState(0); //initialization

//   console.log('check how many time this console re render'); //only two time re-render

//   let incount = () => {
//     setCounter(25);
//   };
//   return (
//     <div>
//       <h3>count = {counter}</h3>
//       <button onClick={incount}>Increase</button>
//     </div>
//   );
// }
