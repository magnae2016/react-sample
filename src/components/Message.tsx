import React from "react";

const Text = ({ content }: { content: string }) => {
  return <p className="text">{content}</p>;
};

const Message = () => {
  const content1 = "This is parent component";
  const content2 = "Message uses Text component";
  return (
    <div>
      {/* 만약 컴포넌트 안에서 표시 내용을 변경하고 싶다면 부모로부터의 콜백 함수를 전달해서 이벤트나 데이터를 알릴 수 있습니다. */}
      <Text content={content1} />
      <Text content={content2} />
    </div>
  );
};

export default Message;
