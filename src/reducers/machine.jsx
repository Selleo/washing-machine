import _reduce from "lodash/reduce";

import * as t from "./../actions/actionTypes";
import { WEEK_DAYS } from "../common/constants";

const defaultState = _reduce(
  WEEK_DAYS,
  (result, entry) => {
    result[entry] = [];
    return result;
  },
  {}
);

export default (state = defaultState, action) => {
  switch (action.type) {
    case t.SAVE_RESERVATIONS:
      return {
        ...state,
        ...action.days
      };
    case t.CLEAR_RESERVATIONS:
      return defaultState;
    default:
      return state;
  }
};
