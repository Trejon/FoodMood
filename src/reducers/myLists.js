const myListsReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_MY_LISTS":
      return action.lists;
    case "ADD_LIST":
      return state.concat(action.list);
    case "UPDATE_LIST":
      return state.map((list) =>
        list.id === action.list.id ? action.list : list
      );
    case "DELETE_LIST":
      return state.filter((list) => (list.id === action.listId ? false : true));
    case "CLEAR_LISTS":
      return [];
    default:
      return state;
  }
};

export default myListsReducer;
