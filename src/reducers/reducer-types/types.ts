type Increment = { type: "INCREMENT"; payload: string };
type IncrementFilteredList = {
  type: "INCREMENT_FILTERED_LIST";
  payload: string;
};
type Decrement = { type: "DECREMENT"; payload: string };
type DecrementFilteredType = {
  type: "DECREMENT_FILTERED_LIST";
  payload: string;
};
type filteredListType = { type: "FILTERED-LIST"; payload: string };
type ConvertedFilteredToObjectType = {
  type: "CONVERT_FILTERED_TO_OBJECT";
  state: object;
};
type isActive = { type: "IS_ACTIVE"; payload: string };
type isNotActive = { type: "IS_NOT_ACTIVE"; payload: string };
type remove = { type: "REMOVE"; payload: number };
type openAndClose = { type: "OPEN_AND_CLOSE_MENU"; payload: boolean };
type gatheringInformationType = {
  type: "GATHERING_DATA_INFORMATION";
  payload: string;
};
type paymentMethod = { type: "PAYMENT_METHOD"; payload: string };

export type Actions =
  | Increment
  | Decrement
  | filteredListType
  | ConvertedFilteredToObjectType
  | IncrementFilteredList
  | DecrementFilteredType
  | isActive
  | isNotActive
  | remove
  | openAndClose
  | gatheringInformationType
  | paymentMethod;
