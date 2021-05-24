let initalState = {
  name: "",
  description: "",
};

const listFormReducer = (state = initalState, action) => {
  switch (action.type) {
    case "UPDATE_LIST_FORM":
      const returnVal = {
        ...state,
        [action.formData.name]: action.formData.value,
      };
      return returnVal;
    case "RESET_LIST_FORM":
      return initalState;
    case "SET_LIST_FORM_DATA_FOR_EDIT":
      return action.listFormData;
    default:
      return state;
  }
};

export default listFormReducer;
