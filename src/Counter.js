import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(function () {
    var timer = setInterval(function () {
      setCount(count + 1);
      console.log('count =' + count);
    }, 1000);

    // If a function is returned by useEffect(),
    // it allows performing a treatment
    // before each component update
    return function () {
      clearInterval(timer);
    };
  });
  return <>The counter is set to: {count}</>;
}

export default Counter;
