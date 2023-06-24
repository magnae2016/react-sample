import React, { useReducer } from "react";

type Action = "DECREMENT" | "INCREMENT" | "DOUBLE" | "RESET";

const reducer = (state: number, action: Action) => {
  switch (action) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "DOUBLE":
      return state * 2;
    case "RESET":
      return 0;
    default:
      return state;
  }
};

type CounterProps = {
  initialValue: number;
};

const Counter = ({ initialValue }: CounterProps): JSX.Element => {
  // setState()에 비해, 상태 업데이트를 호출하는 방법은 구체적인 상태에 의존하지 않기 때문에 코드를 간단하게 유지
  // 상태를 업데이트 하는 로직을 컴포넌트 밖의 함수로 추출
  const [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      <p>Count: {count}</p>

      <button onClick={() => dispatch("DECREMENT")}>-</button>
      <button onClick={() => dispatch("INCREMENT")}>+</button>
      <button onClick={() => dispatch("DOUBLE")}>*2</button>
      <button onClick={() => dispatch("RESET")}>Reset</button>
    </div>
  );
};

export default Counter;
