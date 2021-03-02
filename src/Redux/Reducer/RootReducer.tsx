import { combineReducers } from "redux";
import authReducer from "./AuthReducer";

// const rootReducer = combineReducers({
//   auth: authReducer,
// });
// export default rootReducer;
export default combineReducers({
  auth: authReducer,
});
