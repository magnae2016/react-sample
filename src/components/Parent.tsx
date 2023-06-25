// useCalllback이나 useMemo는 함수나 값을 메모이제이션 함
// 메모이제이션 컴포넌트에 함수나 객체를 전달해도 화면이 다시 그려지지 않음

import React, { useCallback, useState } from "react";

const Fizz = ({ isFizz }: { isFizz: boolean }): JSX.Element => {
  console.log("Fizz가 다시 그려졌습니다.");
  return <>{isFizz && <p>Fizz</p>}</>;
};

type BuzzProps = {
  isBuzz: boolean;
  onClick?: () => void;
};

const Buzz = React.memo(({ isBuzz }: BuzzProps): JSX.Element => {
  console.log("Buzz가 다시 그려졌습니다.");
  return <>{isBuzz && <p>Buzz</p>}</>;
});

const Parent = () => {
  console.log("Parent가 다시 그려졌습니다.");
  const [count, setCount] = useState(1);
  const isFizz = count % 3 === 0;
  const isBuzz = count % 5 === 0;

  // 화면을 다시 그릴 때마다 Parent에서 새로 만들어진 함수가 Buzz에 전달
  // 화면 다시 그리기를 억제하려면, 같은 함수를 전달해야 함
  const onBuzzClick = useCallback(() => {
    console.log("Buzz가 클릭됐습니다.");
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <p>현재 카운트: {count}</p>
      <Fizz isFizz={isFizz} />
      {/* 메모이제이션 컴포넌트에 함수나 객체를 전달하면 */}
      {/* 부모의 화면이 다시 그려질 때 컴포넌트 역시 다시 그려짐 */}
      <Buzz isBuzz={isBuzz} onClick={onBuzzClick} />
    </div>
  );
};

export default Parent;
