import { SET_AUTH_JSESSION } from "./types";

export const setJsession = (session:any) => {
  return {
    type: SET_AUTH_JSESSION,
    payload: session,
  };
};
