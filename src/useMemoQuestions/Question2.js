import React, { useCallback, useState } from "react";
import Child2 from "./Child2";

const Question2 = () => {
  const [count, setCount] = useState(0);

  const Learning = useCallback(() => {
    //some oprations
  }, []);

  return (
    <div>
      <p>This is Count{count}</p>
      <button onClick={() => setCount(count + 1)}>Add me</button>
      <Child2 Learning={Learning} />
    </div>
  );
};

export default Question2;
