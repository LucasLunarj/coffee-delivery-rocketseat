import { createContext, useReducer, ReactNode } from "react";
import { CoffeeItens } from "../data/data";
import { reducer } from "../reducers/coffeeReducer";

export const CoffeeListContext = createContext(null);

type props = {
  children: ReactNode;
};
export const CoffeeListProvider = ({ children }: props) => {
  const [state, dispatch] = useReducer(reducer, CoffeeItens);

  return (
    <CoffeeListContext.Provider value={{ state, dispatch }}>
      {children}
    </CoffeeListContext.Provider>
  );
};
