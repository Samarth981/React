import { useState, useEffect } from 'react';

export default function Jocker() {
  let [joke, setJoke] = useState({});
  const URL = 'https://official-joke-api.appspot.com/random_joke';

  const getNewJock = async () => {
    let result = await fetch(URL);
    let jsonResult = await result.json();
    setJoke({ setup: jsonResult.setup, punchline: jsonResult.punchline });
  };

  // this useEffect come error see in console
  //   useEffect(async function GetFirstJock() {
  //     let result = await fetch(URL);
  //     let jsonResult = await result.json();
  //     setJoke({ setup: jsonResult.setup, punchline: jsonResult.punchline });
  //   }, []);

  useEffect(() => {
    async function GetFirstJock() {
      let result = await fetch(URL);
      let jsonResult = await result.json();
      setJoke({ setup: jsonResult.setup, punchline: jsonResult.punchline });
    }

    GetFirstJock();
  }, []);

  return (
    <div>
      <h3>Joker</h3>
      <h2>{joke.setup}</h2>
      <h2>{joke.punchline}</h2>
      <button onClick={getNewJock}>Create it</button>
    </div>
  );
}
