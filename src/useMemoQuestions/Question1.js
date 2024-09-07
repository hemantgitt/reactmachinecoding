import React, { useMemo, useState } from "react";

const Question1 = () => {
  const [addition, setAddition] = useState(0);
  const [substraction, setSubtraction] = useState(0);

  const MultiplyValue = useMemo(() => {
    console.log("Addition run hoja");
    return addition * 8;
  }, [addition]);

  return (
    <div>
      <h1>This is my Count {addition}</h1>
      <button onClick={() => setAddition(addition + 1)}>Add The number</button>
      {MultiplyValue}
      <h1>{substraction}</h1>
      <button onClick={() => setSubtraction(substraction - 1)}>
        substraction The number
      </button>
    </div>
  );
};

export default Question1;
