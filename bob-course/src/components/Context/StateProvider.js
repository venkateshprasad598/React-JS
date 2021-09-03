import React, { createContext } from "react";
import { useContext } from "react";
import { useReducer } from "react";

export const myContext = createContext();

export const StateProvider = ({ children, reducer, initialState }) => {
  return (
    <myContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </myContext.Provider>
  );
};

export const useStateProvider = () => useContext(myContext);
