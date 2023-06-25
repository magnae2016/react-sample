import React, { useMemo, useState } from "react";

const UseMemoSample = () => {
  console.log("UseMemoSample");
  const [text, setText] = useState("");
  const [items, setItems] = useState<string[]>([]);

  function onChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  const onClickButton = () => {
    setItems([...items, text]);
    setText("");
  };

  const numberOfCharacters1 = items.reduce((sub, item) => {
    return sub + item.length;
  }, 0);

  const numberOfCharacters2 = useMemo(
    () =>
      items.reduce((sub, item) => {
        return sub + item.length;
      }, 0),
    [items]
  );

  return (
    <div>
      <p>UseMemoSample</p>
      <div>
        <input type="text" value={text} onChange={onChangeInput} />
        <button onClick={onClickButton}>Add</button>
      </div>
      <div>
        {items.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <div>
        <p>Total Number of 1: {numberOfCharacters1}</p>
        <p>Total Number of 2: {numberOfCharacters2}</p>
      </div>
    </div>
  );
};

export default UseMemoSample;
