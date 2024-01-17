export const setAddUser = (user) => {
  return {
    type: "ADD_USER",
    payload: user,
  };
};

export const setEditUser = (userEdit) => {
  return {
    type: "EDIT_USER",
    payload: userEdit,
  };
};

export const updateEidtUser = (user) => {
  return {
    type: "UPDATE_USER",
    payload: user,
  };
};

export const setShowDeleteUser = (isShow) => {
  return {
    type: "SHOW_DELETE_USER",
    payload: isShow,
  };
};

export const setDeleteUser = (userId) => {
  return {
    type: "DELETE_USER",
    payload: userId,
  };
};
