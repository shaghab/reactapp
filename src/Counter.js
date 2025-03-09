import { useState, useEffect } from 'react';

function Counter({ init, end }) {
  init = parseInt(init || 0);
  end = parseInt(end || 0);
  const [count, setCount] = useState(init);

  useEffect(function () {
    if (end && count >= end) return;
    var timer = setInterval(function () {
      setCount((count) => count + 1);
      console.log('count =' + count);
    }, 1000);

    // If a function is returned by useEffect(),
    // it allows performing a treatment
    // before each component update
    return function () {
      clearInterval(timer);
    };
  });
  return (
    <>
      Initial value of the counter is: {init}
      <br />
      End of the counter at: {end}
      <br />
      The counter is set to: {count}
      <br />
      {end && count >= end ? (
        <b>Counter stopped</b>
      ) : (
        <i>Counter in progress</i>
      )}
    </>
  );
}

export default Counter;
