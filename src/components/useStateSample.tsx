import React, { useState } from "react";

type CounterProps = {
  initialValue: number;
};

const Counter = ({ initialValue }: CounterProps): JSX.Element => {
  // 업데이트 함수를 호출하면 상태가 바뀌고, 훅이 있는 컴포넌트는 다시 그려집니다.
  const [count, setCount] = useState(Number(initialValue));
  return (
    <>
      <div>
        <p>Count: {count}</p>
        <button
          onClick={() => {
            setCount(count - 1);
            setCount(count - 1);
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            setCount((v) => {
              return v + 1;
            });
            setCount((v) => {
              return v + 1;
            });
          }}
        >
          +
        </button>
      </div>
    </>
  );
};

export default Counter;
