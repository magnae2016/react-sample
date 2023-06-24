import React, { createContext } from "react";

const TitleContext = createContext("");

const Title = () => {
  return (
    // Context.Consumer 라는 컴포넌트를 추가하고, 그 자식 요소로서 함수를 지정하면 인수로부터 데이터를 참조할 수 있습니다.
    <TitleContext.Consumer>{(title) => <p>{title}</p>}</TitleContext.Consumer>
  );
};

const Header = () => {
  return <Title />;
};

const Page = () => {
  const title = "React Book";

  return (
    <TitleContext.Provider value={title}>
      <Header />
    </TitleContext.Provider>
  );
};

export default Page;
