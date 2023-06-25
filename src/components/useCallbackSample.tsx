import React, { useCallback, useState } from "react";

type ButtonProps = {
  onClick: () => void;
};

const DecrementButton = ({ onClick }: ButtonProps): JSX.Element => {
  console.log("DecrementButton");
  return <button onClick={onClick}>Decrement</button>;
};

const IncrementButton = React.memo(({ onClick }: ButtonProps): JSX.Element => {
  console.log("IncrementButton");
  return <button onClick={onClick}>Increment</button>;
});

const DoubleButton = React.memo(({ onClick }: ButtonProps): JSX.Element => {
  console.log("double");
  return <button onClick={onClick}>Double</button>;
});

const Parent = () => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount((c) => c - 1);
  };

  const increment = () => {
    setCount((c) => c + 1);
  };

  const double = useCallback(() => {
    setCount((c) => c * 2);
  }, []);

  console.log("Parent");

  return (
    <div>
      <p>Count: {count}</p>

      <DecrementButton onClick={decrement} />
      <IncrementButton onClick={increment} />
      <DoubleButton onClick={double} />
    </div>
  );
};

export default Parent;
