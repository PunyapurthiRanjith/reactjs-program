import { useState } from "react";

const CustomCounterHook = () => {
  const [countIncrement, setCountIncrement] = useState(0);

  const incrementHandler = () => {
    setCountIncrement(countIncrement + 1);
  };
  const decrementHandler = () => {
    setCountIncrement(countIncrement - 1);
  };

  return [countIncrement, incrementHandler, decrementHandler];
};
export default CustomCounterHook;
