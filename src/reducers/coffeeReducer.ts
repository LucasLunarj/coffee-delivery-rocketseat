import { produce } from "immer";
import { CoffeDataType, coffeeItensType } from "../data/data";
import { Actions } from "./reducer-types/types";

export const reducer = (state: CoffeDataType, action: Actions) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        list: state.list.map((item: coffeeItensType) => {
          if (item.id === action.payload) {
            return {
              ...item,
              amount: item.amount! + 1,
              price: item.price! + 9.9,
            };
          }
          return item;
        }),
      };
    case "DECREMENT":
      return {
        ...state,
        list: state.list.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              amount: item.amount! - 1,
              price: item.price! - 9.9,
            };
          }
          return item;
        }),
      };
    case "FILTERED-LIST":
      console.log(state.filteredList);

      // return ({
      //   ...state, filteredList: [...state.filteredList, state.list.filter(item => item.id === action.payload)]

      // })

      return produce(state, (draft) => {
        draft.filteredList.push(
          draft.list.filter((item) => item.id === action.payload)
        );
      });
    case "CONVERT_FILTERED_TO_OBJECT":
      console.log(state.filteredList, "lunita");
      return {
        ...state,
        filteredList: state.filteredList.map((item) => {
          return { ...state.filteredList, ...item[0] };
        }),
      };
    case "INCREMENT_FILTERED_LIST":
      console.log(state);
      return {
        ...state,
        filteredList: state.filteredList.map((item) => {
          if (action.payload === item.id) {
            return {
              ...item,
              amount: item.amount + 1,
              price: item.price + 9.9,
            };
          }
          return item;
        }),
      };

    case "DECREMENT_FILTERED_LIST":
      console.log(state.filteredList, "test");
      return {
        ...state,
        filteredList: state.filteredList.map((item) => {
          if (action.payload === item.id) {
            return {
              ...item,
              amount: item.amount - 1,
              price: item.price - 9.9,
            };
          }
          return item;
        }),
      };

    case "IS_ACTIVE":
      return {
        ...state,
        list: state.list.map((item) => {
          if (item.id === action.payload) {
            return { ...item, active: true };
          }
          return item;
        }),
      };
    case "IS_NOT_ACTIVE":
      return {
        ...state,
        list: state.list.map((item) => {
          if (item.id === action.payload) {
            return { ...item, active: false };
          }
          return item;
        }),
      };
    case "REMOVE":
      console.log(state.filteredList);
      return produce(state, (draft) => {
        draft.filteredList.splice(action.payload, 1);
      });

    // return ({
    //   ...state, filteredList: state.filteredList.filter(item => item.id !== action.payload)

    // })
    case "OPEN_AND_CLOSE_MENU":
      return {
        ...state,
        menuSwitcher: action.payload,
      };

    case "GATHERING_DATA_INFORMATION":
      return {
        ...state,
        deliveryInformation: action.payload,
      };

    case "PAYMENT_METHOD":
      return {
        ...state,
        paymentMethodSelected: action.payload,
      };
  }
};
