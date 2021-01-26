import * as actionTypes from "./actionTypes";

export const createContact = (contact) => {
  return {
    type: actionTypes.CREATE_NEW_CONTACT,
    contact: contact
  };
};

export const removeContact = (idx) => {
  return {
    type: actionTypes.REMOVE_CONTACT,
    idx: idx
  };
};
