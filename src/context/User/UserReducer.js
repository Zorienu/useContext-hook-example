import { GET_USERS, GET_PROFILE } from "../types";

const reducer = (state, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload };
    case GET_PROFILE:
      return { ...state, selectedUser: action.payload };
    default:
      return state;
  }
};

export default reducer;
