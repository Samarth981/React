import { useState } from 'react';

export default function Likebtn() {
  let [isLike, setIsLike] = useState(false);

  let toggleLike = () => {
    setIsLike(!isLike); //ture=> false, false => true
  };

  let Likestyle = { color: 'red' };

  return (
    <div>
      <p onClick={toggleLike}>
        {isLike ? (
          <i className="fa-solid fa-heart" style={Likestyle}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
    </div>
  );
}
