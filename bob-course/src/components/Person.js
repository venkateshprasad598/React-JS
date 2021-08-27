import React from "react";
const Persons = (props) => {
  return (
    <div>
      <h1>
        {props.name.map((data) => {
          return (
            <div>
              <h1>{data.name}</h1>
              <input
                type="text"
                onChange={(e) => props.handleChange(e, data.id)}
                name="name"
              />
            </div>
          );
        })}
      </h1>
    </div>
  );
};
export default Persons;
