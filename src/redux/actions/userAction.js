export const setAddUser = (user) => {
  return {
    type: "ADD_USER",
    payload: user,
  };
};

export const setEditUser = (user) => {
  return {
    type: "EDIT_USER",
    payload: user,
  };
};

export const setDeleteUser = (userId) => {
  return {
    type: "DELETE_USER",
    payload: userId,
  };
};
