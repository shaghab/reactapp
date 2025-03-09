function Counter() {
  var count = 0;
  setInterval(function () {
    count++;
    console.log('count =' + count);
  }, 1000);
  return <>The counter is set to: {count}</>;
}

export default Counter;
