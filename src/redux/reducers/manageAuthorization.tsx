const initialState = {
  authorized: false,
  name: "",
  email: "",
  phone: "",
};

const manageAuth = (state = initialState, action: any) => {
  switch (action.type) {
    case "check":
      return state;
      break;

    case "authorize":
      state.authorized = true;
      state.name = action.myUser.name;
      state.phone = action.myUser.phone;
      state.email = action.myUser.email;

      return state;
      break;

    case "unAuthorize":
      state.authorized = false;
      return state;
      break;

    default:
      return state;
  }
};

export default manageAuth;
