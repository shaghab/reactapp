import { useState, useEffect } from 'react';

function Counter({ init, end }) {
  init = parseInt(init || 0);
  end = parseInt(end || 0);
  const [count, setCount] = useState(init);
  const [start, setStart] = useState(true); // true for displaying the Start button

  function incr() {
    setCount((count) => count + 1);
  }

  useEffect(function () {
    if (!start) {
      // The Start button is not displayed; you can initiate the timer.
      var timer = setInterval(function () {
        setCount((count) => {
          var newCount = count + 1;
          if (newCount >= end) setStart(true);
          return newCount;
        });
      }, 1000); // 1 second
    }

    return function () {
      clearInterval(timer);
    };
  });

  function restart() {
    setStart(false); // Hide the Start button
    setCount(init); // Reset "count" to the initial value.
  }

  return (
    <>
      Initial value of the counter is: {init}
      <br />
      End of the counter at: {end}
      <br />
      The counter is set to: {count}
      <br />
      {start ? (
        <>
          <b>Counter stopped</b>
          <button onClick={restart}>Start</button>
        </>
      ) : (
        <i>Counter in progress</i>
      )}
    </>
  );
}

export default Counter;
