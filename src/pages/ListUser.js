import React from "react";
import "../assets/styles/components/ListUser.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDeleteUser } from "../redux/actions/userAction";

const ListUser = () => {
  const listUser = useSelector((state) => state.user.listUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleAdd = () => {
    navigate("/add");
  };

  const handleEdit = () => {
    navigate("/edit");
  };

  const handleDelete = (userId) => {
    const actionDelete = setDeleteUser(userId);
    dispatch(actionDelete);
  };

  return (
    <div className="listUser">
      <div className="addUser">
        <button onClick={handleAdd}>Add</button>
      </div>
      <div className="bodyListUser">
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Phone</th>
              <th>address</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            {listUser.map((user, index) => {
              return (
                <tr key={user.id}>
                  <td style={{ fontWeight: "bold" }}>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.phone}</td>
                  <td>{user.address}</td>
                  <td>
                    <span className="btn-edit" onClick={handleEdit}>
                      Edit
                    </span>
                    <span
                      className="btn-delete"
                      onClick={() => handleDelete(user.id)}>
                      Delete
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListUser;
