import React from 'react';
import './App.css';
import Counter from './comps/counter';
import Counter2 from './comps/counter2';
import Hits from './comps/hits';
import HitsQuery from './comps/hits-query';
import Light from './comps/light';

function App() {
  return (
    <div className="App">
      <Hits />
      <hr />
      <HitsQuery />
      <hr />
      <Light />
      <hr />
      <Counter />
      <Counter start={3} />
      <hr/>
      <Counter2 />
      <Counter2 start={4}/>
    </div>
  );
}

export default App;
