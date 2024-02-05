const initialState = false;

const manage = (state = initialState, action) => {
  switch (action.type) {
    case "check":
      return state;
      break;

    case "authorize":
      return true;
      break;

    case "unAuthorize":
      return false;
      break;

    default: return state

      break;
  }
};

export default manage