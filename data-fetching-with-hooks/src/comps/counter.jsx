import React, { useState, Fragment } from 'react';

const Counter = ({ start = 0 }) => {
  const [count, setCount] = useState(start);

  return (
    <Fragment>
      <div>I have {count} times</div>
      <button onClick={() => setCount(count+1)}> add one </button>
    </Fragment>
  )
}

export default Counter;
