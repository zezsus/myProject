
const initState = {
  listUser: [],
  editUser: {},
  showDelete: false,
};


const UserReducer= (state = initState, action: any) => {
  switch (action.type) {
    case 'ADD_USER': {
      const newUser:any = [...state.listUser];
      newUser.push(action.payload);
      return {
        ...state,
        listUser: newUser,
      };
    }

    case 'EDIT_USER': {
      return {
        ...state,
        editUser: action.payload,
      };
    }

    case 'UPDATE_USER': {
      const updatedUser = state.listUser.map((user:any) => {
        if (user.id === action.payload.id) {
          return action.payload;
        } else {
          return user;
        }
      });

      return {
        ...state,
        listUser: updatedUser,
      };
    }

    case 'SHOW_DELETE_USER': {
      return {
        ...state,
        showDelete: action.payload,
      };
    }

    case 'DELETE_USER': {
      const updateListUser = state.listUser.filter(
        (user:any) => user.id !== action.payload
      );
      return {
        ...state,
        listUser: updateListUser,
      };
    }

    default:
      return state;
  }
};

export default UserReducer;