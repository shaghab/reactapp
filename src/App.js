import logo from './logo.svg';
import './App.css';
import Counter from './Counter.js';

function App() {
  return (
    <>
      {(function () {
        var jsx = [];
        for (var i = 0; i < 3; i++) {
          jsx.push(
            <>
              Counter {i} defined by{' '}
              {`<Counter init='5' end='${10 + i}' />`} : <br />
              <Counter init="5" end={10 + i} />
              <br />
              <br />
            </>
          );
        }
        return jsx;
      })()}
    </>
  );
}

export default App;
