const initState = {
  listUser: [],
};

export const UserReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_USER": {
      const newUser = [...state.listUser];
      newUser.push(action.payload);
      return {
        ...state,
        listUser: newUser,
      };
    }

    case "EDIT_USER": {
      return state;
    }

    case "DELETE_USER": {
      const updateListUser = state.listUser.filter(
        (user) => user.id !== action.payload
      );

      console.log(updateListUser);

      return {
        ...state,
        listUser: updateListUser,
      };
    }

    case "SEARCH_USER": {
      return state;
    }
    default:
      return state;
  }
};
