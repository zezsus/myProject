import React, { useState } from "react";
import "../assets/styles/components/EditUser.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateEidtUser } from "../redux/actions/userAction";

const EditUser = () => {
  const navigate = useNavigate();
  const editUser = useSelector((state) => state.user.editUser);
  const dispatch = useDispatch();
  const [updateUser, setUpdateUser] = useState(editUser);

  const handleChangeInputEdit = (e) => {
    const { name, value } = e.target;
    setUpdateUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = () => {
    dispatch(updateEidtUser(updateUser));
    handleClose();
  };

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="editUserComponent">
      <div className="formEditUser">
        <div className="editHeader ">
          <h2>Edit User</h2>
        </div>

        <div className="editBody">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={updateUser.name}
            onChange={handleChangeInputEdit}
          />
          <input
            type="text"
            placeholder="Phone"
            name="phone"
            value={updateUser.phone}
            onChange={handleChangeInputEdit}
          />
          <input
            type="text"
            placeholder="Address"
            name="address"
            value={updateUser.address}
            onChange={handleChangeInputEdit}
          />{" "}
        </div>

        <div className="editFooter">
          <button className="btn-save" onClick={handleSave}>
            Save
          </button>
          <button className="btnClose" onClick={handleClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
