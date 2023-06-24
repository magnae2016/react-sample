import React from "react";

type ContainerProps = {
  title: string;
  children: React.ReactNode;
};

// 함수 컴포넌트는 임의의 객체를 props로서 인수로 가지며,
// JSX.Element 타입의 값을 반환하는 함수가 됩니다.
const Container = (props: ContainerProps): JSX.Element => {
  const { children, title } = props;
  return (
    <div style={{ backgroundColor: "red" }}>
      <span>{title}</span>
      {children}
    </div>
  );
};

const Parent = () => {
  return (
    <Container title="Hello">
      <p>이 부분이 배경색으로 둘러싸여 있습니다.</p>
    </Container>
  );
};

export default Parent;
