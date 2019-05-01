import React, { useState, Fragment, useEffect } from 'react';

import useOffline from '../uses/use-offline';

const Light = () => {
  const [state, setState] = useState(false);
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    let t;
    console.log('effect runs');
    if (state) {
      t = setInterval(() => setTimer(t => t + 1), 1000);
    }
    return () => clearInterval(t);
  }, [state]);

  const onReset = () => {
    setState(false);
    setTimer(0);
  };
  const isOffline = useOffline();

  return (
    <Fragment>
      <p>{timer}</p>
      {state && (<button type="button" onClick={() => setState(false)}>Stop</button>)}

      {!state && (<button type="button" onClick={() => setState(true)}>Start</button>)}
      <button type="button" disabled={timer === 0} onClick={onReset} >Reset</button>
      {isOffline ? (<div>Sorry, you are offline ...</div>) : (<div>You are online!</div>)}

    </Fragment>
  )
};

export default Light;
