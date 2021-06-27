import React, { useEffect, useState } from "react";

export function Test2(props) {
  console.log("set state");
  const [s1, setS1] = useState(props.arg);

  const buttonHandler = () => {
    console.log("button pressed");
    let val = s1;
    val++;
    setS1(val);
  };

  useEffect(() => {
    console.log("use effect");
  });

  console.log("render1");

  return (
    <>
      {console.log("render2")}
      <button onClick={buttonHandler}>Push</button>
      <div>{s1}</div>
    </>
  );
}
