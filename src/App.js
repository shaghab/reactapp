import logo from './logo.svg';
import './App.css';
import Counter from './Counter.js';
import React from 'react';

function App() {
  return (
    <>
      {(function () {
        var jsx = [];
        for (var i = 0; i < 3; i++) {
          jsx.push(
            <React.Fragment key={i}>
              Counter {i} defined by{' '}
              {`<Counter init='5' end='${10 + i}' />`} : <br />
              <Counter init="5" end={10 + i} />
              <br />
              <br />
            </React.Fragment>
          );
        }
        return jsx;
      })()}
    </>
  );
}

export default App;
