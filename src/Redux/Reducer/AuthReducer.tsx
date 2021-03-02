import { SET_AUTH_JSESSION } from "../Action/types";

const initialState = {
  jsession: "",
};

function authReducer(state = initialState, action:any) {
  switch (action.type) {
    case SET_AUTH_JSESSION:
      return {
        ...state,
        jsession: action.payload,
      };

    default:
      return state;
  }
}
export default authReducer;
