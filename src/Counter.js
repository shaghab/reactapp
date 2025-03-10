import { useState } from 'react';

function Counter() {
  const [value, setCount] = useState('');

  function change(event) {
    setCount(event.target.value);
  }

  return (
    <>
      Counter: <input type="text" onChange={change} /> <br />
      <br />
      Input value: {value}
    </>
  );
}
export default Counter;
