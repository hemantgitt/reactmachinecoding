import React, { useState } from "react";

const Swapbox = () => {
  const [box1, setbox1] = useState([
    { id: 1, text: "element1" },
    { id: 2, text: "element2" },
    { id: 3, text: "element3" },
  ]);

  const [box2, setbox2] = useState([]);

  const 

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <div style={{ marginRight: "20px" }}>
          <h2>Box 1</h2>
          {box1Elements.map((element) => (
            <div
              key={element.id}
              onClick={() => handleMoveToBox2(element.id)}
              style={{ cursor: "pointer", marginBottom: "10px" }}
            >
              {element.text}
            </div>
          ))}
        </div>
        <div>
          <h2>Box 2</h2>
          {box2Elements.map((element) => (
            <div
              key={element.id}
              onClick={() => handleMoveToBox1(element.id)}
              style={{ cursor: "pointer", marginBottom: "10px" }}
            >
              {element.text}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Swapbox;
