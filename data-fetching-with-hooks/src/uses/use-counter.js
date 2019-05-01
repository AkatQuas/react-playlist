import { useState, useEffect } from 'react';

export default (init) => {
  const [count, setCount] = useState(init);
  useEffect(() => {
    console.log('init value ', init, ' changes, now is ', count);
  }, [count])
  return [count, setCount];
}