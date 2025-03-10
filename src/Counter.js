import { useState, useEffect, useRef } from 'react';

function Counter({ setTotal, focus }) {
  const [value, setValue] = useState('');
  const refCounter = useRef();

  useEffect(function () {
    // Give focus to the field if the "focus" attribute is indicated
    if (focus) refCounter.current.focus();
  }, []);

  function change(event) {
    var newValue = parseInt(event.target.value || 0);

    // New value in the field
    setValue(newValue);

    // New Total
    setTotal((total) => total - value);
    setTotal((total) => total + newValue);
  }

  function keydown(event) {
    // Display the pressed key in the console
    console.log(event.key);
    // Allow the Backspace, Delete, ArrowLeft, ArrowRight, and Tab keys
    if (['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(event.key)) return;
    // Then disallow all other keys except the 0 to 9
    if (event.key < '0' || event.key > '9') event.preventDefault();
  }

  return (
    <>
      Counter: <input type="text" onChange={change} onKeyDown={keydown} ref={refCounter} /> <br />
      <br />
      Input value: {value}
    </>
  );
}
export default Counter;
