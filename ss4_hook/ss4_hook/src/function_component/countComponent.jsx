import { useState } from "react";

const CountComponent = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const handleIncrease = (increaseNum1, callback) => {
    callback((prev) => prev + increaseNum1);
  };
  return (
    <>
      <div>
        <p>Count:{count} </p>
        <button onClick={() => handleIncrease(1, setCount)}>Add 1</button>
        <p>Count: {count1}</p>
        <button onClick={() => handleIncrease(2, setCount1)}>Add 2</button>
      </div>
    </>
  );
};

export default CountComponent;
