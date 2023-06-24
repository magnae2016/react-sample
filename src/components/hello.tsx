import React, { useState } from "react";

export default function Hello() {
  function onClick() {
    alert("hello");
  }

  const text = "Hello, React";

  return <div onClick={onClick}>{text}</div>;
}
