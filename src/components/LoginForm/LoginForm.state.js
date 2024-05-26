export const INITAL_STATE = {
  isValid: true,
  value: "",
  isFormReadyToSubmit: false
};

export const SET_VALUE_ACTION = "SET_VALUE";
export const SUMBIT_ACTION = "SUBMIT";
export const CLEAR_ACTION = "CLEAR";
export const RESET_VALIDITY = "RESET_VALIDITY";

export function loginFormReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_VALUE_ACTION:
      return { ...state, value: payload };
    case CLEAR_ACTION:
      return { ...INITAL_STATE };
    case RESET_VALIDITY:
      return { ...state, isValid: INITAL_STATE.isValid };
    case SUMBIT_ACTION: {
      const value = state.value.trim().length;

      return {
        ...state,
        isValid: value,
        isFormReadyToSubmit: value
      };
    }
  }
}
