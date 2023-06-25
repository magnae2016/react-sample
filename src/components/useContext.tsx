import React, { createContext, useContext } from "react";

type User = {
  id: number;
  name: string;
};

const UserContext = createContext<User | null>(null);

const GrandChild = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <p>{user?.id}</p>
      <p>{user?.name}</p>
    </div>
  );
};

const Child = () => {
  return <GrandChild />;
};

const Parent = () => {
  const user: User = {
    id: 1,
    name: "Hannah",
  };
  return (
    <div>
      <UserContext.Provider value={user}>
        <Child />
      </UserContext.Provider>
    </div>
  );
};

export default Parent;
