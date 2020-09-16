export const ADD = "ADD_WARE_LIST";
export const REMOVE = "REMOVE_WARE_LIST";

export const addWareList = list => {
  return {
    type: ADD,
    payload: list,
  };
};

export const removeWareList = warehouse => {
  return {
    type: REMOVE,
    payload: warehouse,
  };
};
