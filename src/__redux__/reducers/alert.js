import { SHOW_ALERT, HIDE_ALERT } from "__redux__/types";

const initialState = {
  type: "",
  show: false,
  messageKey: "",
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SHOW_ALERT:
      return {
        ...state,
        ...payload,
        show: true,
      };
    case HIDE_ALERT:
      return {
        ...state,
        ...payload,
        show: false,
      };
    default:
      return state;
  }
};
