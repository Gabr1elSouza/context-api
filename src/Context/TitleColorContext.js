import { createContext, useReducer } from "react";

export const TitleColorContext = createContext();

export const tileColorReducer = (state, action) => {
  //switch
  switch (action.type) {
    case "RED":
      return { ...state, color: "red" };
    case "BLUE":
      return { ...state, color: "blue" };
    default:
      return state;
  }
};

export const TitleColorContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tileColorReducer, { color: "purple" });
  console.log("titlecolor context:", dispatch);
  return (
    <TitleColorContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TitleColorContext.Provider>
  );
};
