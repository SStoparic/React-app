import { useState } from 'react';

function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  const increaseCount = () => {
    setCount(count + 1);
  };

  return [count, setCount, increaseCount];
}

export default useCounter;