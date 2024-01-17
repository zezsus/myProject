import React from "react";
import "../assets/styles/components/DeleteUser.scss";
import { setDeleteUser, setShowDeleteUser } from "../redux/actions/userAction";
import { useDispatch } from "react-redux";

const DeleteUser = ({ userId }) => {
  const dispatch = useDispatch();

  const handleCancelDeleteUser = () => {
    dispatch(setShowDeleteUser(false));
  };

  const handleDelete = (userId) => {
    const actionDelete = setDeleteUser(userId);
    dispatch(actionDelete);
    handleCancelDeleteUser();
  };

  return (
    <div className="deleteUserComponent">
      <div className="deleteForm">
        <div className="deleteUserHeader">
          <h2>Delete User</h2>
        </div>
        <div className="deleteUserBody">
          <span>Do you want to delete this item?</span>
          <hr />
        </div>

        <div className="deleteUserFooter">
          <button
            className="btn-deleteUser"
            onClick={() => handleDelete(userId)}>
            Yes
          </button>
          <button
            className="btn-cancelDeleteUser"
            onClick={handleCancelDeleteUser}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteUser;
