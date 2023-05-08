import React, { useState, useEffect } from 'react';
import useTimer from './hooks/useTimer';

function Timer() {

    const [isActive, timer, setIsActive] = useTimer();
// commented out because we created our own hook using this logic.

// const [isActive, setIsActive] = useState(false);
// const [timer, setTimer] = useState(0);

// useEffect(() => {
//   let interval;

//   if (isActive) {
//     interval = setInterval(() => {
//       setTimer(timerState => timerState + 1)
//     }, 1000
    
//   )}

//   return () => clearInterval(interval);
// }, [isActive]);

return (
  <React.Fragment>
    {isActive ? <h1>{timer}</h1> : <h1>Timer Stopped</h1>}
    <button onClick={() => setIsActive(!isActive)}>State/Stop</button>
  </React.Fragment>
  );
}

export default Timer;