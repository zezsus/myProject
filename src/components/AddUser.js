import React, { useState } from "react";
import "../assets/styles/components/AddUser.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAddUser } from "../redux/actions/userAction";

const AddUser = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const handlePhoneChange = (e) => {
    const inputPhone = e.target.value;
    const formatPhone = inputPhone.replace(/[^0-9]/g, "").slice(0, 10);
    setPhone(formatPhone);
  };

  const handleAddUser = () => {
    if (!name || !phone || !address) {
      setError("Please enter all the required information.");
      setTimeout(() => setError(""), 3000);
    } else {
      const newUser = {
        id: Math.floor(Math.random() * 10000),
        name: name,
        phone: phone,
        address: address,
      };
      navigate("/");
      const action = setAddUser(newUser);
      dispatch(action);
    }
  };

  const handleCloseAddUser = () => {
    setName("");
    setPhone("");
    setAddress("");
    navigate("/");
  };

  return (
    <div className="addUserComponent">
      <div className="formAddUser">
        <div className="addHeader ">
          <h2>Add User</h2>
        </div>

        <div className="addBody">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={handlePhoneChange}
          />
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <span className="error">{error}</span>
        </div>

        <div className="addFooter">
          <button className="btn-add" onClick={handleAddUser}>
            Add
          </button>
          <button className="btnClose" onClick={handleCloseAddUser}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
