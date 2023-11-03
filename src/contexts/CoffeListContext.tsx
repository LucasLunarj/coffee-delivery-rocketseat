import { createContext, useReducer, ReactNode, Dispatch } from "react";
import { CoffeDataType, CoffeeItens } from "../data/data";
import { reducer } from "../reducers/coffeeReducer";
import { Actions } from "../reducers/reducer-types/types";

interface ContextType {
  state: CoffeDataType[];
  dispatch: Dispatch<Actions>;
}

export const CoffeeListContext = createContext<ContextType | null>(null);

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
