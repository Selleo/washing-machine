import * as t from "./actionTypes";

export const saveReservations = days => ({
  type: t.SAVE_RESERVATIONS,
  days
});

export const clearReservations = () => ({
  type: t.CLEAR_RESERVATIONS
});
