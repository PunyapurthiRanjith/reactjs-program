import { useState } from "react";

const CounterHooks = () => {
  const [age, setAge] = useState(0);
  const onclickHandler = (event) => {
    switch (event) {
      case "INCREMENT":
        setAge((age) => age + 1);
        break;
      case "DECREMENT":
        if (age > 0) {
          setAge(age - 1);
        } else {
          alert("Age can't be Negative");
        }
        break;
      case "RESET":
        setAge(0);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <h1>Counter {age}</h1>
      <button
        onClick={() => {
          onclickHandler("INCREMENT");
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          onclickHandler("DECREMENT");
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          onclickHandler("RESET");
        }}
      >
        Reset
      </button>
    </>
  );
};
export default CounterHooks;
