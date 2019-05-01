import React, { Fragment } from 'react';
import useCounter from '../uses/use-counter';

const Counter = ({ start = 0 }) => {
  const [count, setCount] = useCounter(start);

  return (
    <Fragment>
      <div>I have {count} times</div>
      <button onClick={() => setCount(count+1)}> add one </button>
    </Fragment>
  )
}

export default Counter;
