import * as actionTypes from "../Actions/actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.CREATE_NEW_CONTACT:
      return [...state, Object.assign({}, action.contact)];
    case actionTypes.REMOVE_CONTACT:
      return state.filter((data, i) => i !== action.idx);
    default:
      return state;
  }
};
