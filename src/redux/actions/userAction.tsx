export const setAddUser = (user: any) => {
  return {
    type: "ADD_USER",
    payload: user,
  };
};

export const setEditUser = (userEdit: any) => {
  return {
    type: "EDIT_USER",
    payload: userEdit,
  };
};

export const updateEidtUser = (user: any) => {
  return {
    type: "UPDATE_USER",
    payload: user,
  };
};

export const setShowDeleteUser = (isShow: any) => {
  return {
    type: "SHOW_DELETE_USER",
    payload: isShow,
  };
};

export const setDeleteUser = (userId: any) => {
  return {
    type: "DELETE_USER",
    payload: userId,
  };
};
