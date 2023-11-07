import { createContext, useReducer, ReactNode, Dispatch } from "react";
import { CoffeeDataType, CoffeeItens } from "../data/data";
import { reducer } from "../reducers/coffeeReducer";
import { Actions } from "../reducers/reducer-types/types";

interface ContextType {
  state: CoffeeDataType;
  dispatch: Dispatch<Actions>;
}

export const CoffeeListContext = createContext<ContextType | null>(null);

type props = {
  children: ReactNode;
};
export const CoffeeListProvider = ({ children }: props) => {
  const [state, dispatch] = useReducer(reducer, CoffeeItens as CoffeeDataType);

  return (
    <CoffeeListContext.Provider value={{ state, dispatch }}>
      {children}
    </CoffeeListContext.Provider>
  );
};
