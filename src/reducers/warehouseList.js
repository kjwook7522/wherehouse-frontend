import { ADD, REMOVE } from "actions";

const initState = [];

export const warehouseList = (state = initState, action) => {
  switch (action.type) {
    case ADD:
      return state;
    case REMOVE:
      return state;
    default:
      return state;
  }
}