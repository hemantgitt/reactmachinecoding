import React, { useState, useEffect } from "react";
import "./Shopping.css";

const Shopping = () => {
  const [food, setFood] = useState("");
  const [shoppingList, setShoppingList] = useState([]);
  const [bucketlist, setBucketList] = useState([]);

  const InputHandler = (e) => {
    setFood(e.target.value);
  };

  const fetchItem = async (food) => {
    const url = `https://api.frontendeval.com/fake/food/${food}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setShoppingList(data);
  };

  useEffect(() => {
    if (food.length >= 2) {
      //make n api call
      fetchItem(food);
    }
  }, [food]);

  const handleShoppingList = (e) => {
    const idx = e.target.getAttribute(data - id);
    if (idx) {
      const obj = {
        id: Date.now(),
        data: shoppingList[idx],
        isDone: false,
      };
      const copybucketlist = [...bucketlist];
      copybucketlist.push(obj);
      setBucketList(copybucketlist);
    }
    setFood("");
  };
  
  return (
    <>
      <div>
        <div>
          <input
            type="text"
            placeholder="item"
            value={food}
            onChange={InputHandler}
          />
        </div>
        <div>
          {food.length >= 2 ? (
            <div className="shopping-List" onclick={handleShoppingList}>
              {shoppingList.map((item, index) => {
                return (
                  <div data-id={index} className="product">
                    {item}
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
        <div>
          {shoppingList.map(() => {
            return (
              
              <div className="shopping-item">
              <button>Tick</button>
                <div>item</div>
                <button>cross</button>
              </div>
               
               
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Shopping;
