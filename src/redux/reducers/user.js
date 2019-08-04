const initialState = {
  isCellAvail: false,
  isOnboarded: false
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "CELLAVAIL":
      return {
        ...state,
        isCellAvail: true
      };
    case "ONBOARD":
      return {
        ...state,
        isOnboarded: true
      };
    default:
      return state;
  }
};

export { user };
