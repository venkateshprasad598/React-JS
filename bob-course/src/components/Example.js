import React, { useState } from "react";
import products from "./Product/ProductDetails";

const Example = () => {
  const [state, setState] = useState("");
  const handleClick = (num, name) => {
    console.log(num);
    setState(name);
  };
  return (
    <div>
      <h1>Hello</h1>
      {products.map((data) => {
        return (
          <div>
            <h1>{data.id}</h1>
            <h1>{data.name}</h1>
            <h1>{data.price}</h1>
            <button onClick={() => handleClick(data.id, data.name)}>Add</button>
          </div>
        );
      })}
      {state}
      {console.log(state)}
    </div>
  );
};

export default Example;
