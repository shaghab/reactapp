import { useState, useEffect } from 'react';

function Counter(props) {
  var init = parseInt(props.init || 0);
  const [count, setCount] = useState(init);

  useEffect(function () {
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
      The counter is set to: {count}
    </>
  );
}

export default Counter;
