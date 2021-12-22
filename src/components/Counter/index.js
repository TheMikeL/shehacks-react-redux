import React, { useState, useEffect } from "react";

import './Counter.scss';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 3) {
      setCount(count-15);
    }
  }, [count])

  return (
    <div>
      <h1>{count}</h1>
      <button className="button" onClick={() => setCount(count - 1)}>-</button>
      <button className="button" onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default Counter;