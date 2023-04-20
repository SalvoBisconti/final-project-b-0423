export const mainReducer = (state, action) => {
  switch (action.type) {
    case "SET_CRYPTO_LIST":
      return {
        ...state,
        cryptoListData: action.payload,
      };
    case "SET_THEME":
      return {
        ...state,
        modeData: action.payload,
      };
    default:
      return state;
  }
};
