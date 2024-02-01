import { createContext, useReducer } from "react";

export const TitleColorContext = createContext();

export const tileColorReducer = (state, action) => {
  //switch
};

export const TitleColorContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tileColorReducer, { color: "purple" });
  console.log("titlecolor context:", state);
  return (
    <TitleColorContext.Provider value={{ ...state }}>
      {children}
    </TitleColorContext.Provider>
  );
};
