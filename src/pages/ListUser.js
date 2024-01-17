import React from "react";
import "../assets/styles/components/ListUser.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setEditUser, setShowDeleteUser } from "../redux/actions/userAction.js";
import DeleteUser from "../components/DeleteUser.js";

const ListUser = () => {
  const listUser = useSelector((state) => state.user.listUser);
  const showDeleteUser = useSelector((state) => state.user.showDelete);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleShowAdd = () => {
    navigate("/add");
  };

  const handleEdit = (user) => {
    dispatch(setEditUser(user));
    navigate("/edit");
  };

  const handleShowDelete = () => {
    dispatch(setShowDeleteUser(true));
  };

  return (
    <div className="listUser">
      <div className="addUser">
        <button onClick={handleShowAdd}>Add</button>
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
                    <span className="btn-edit" onClick={() => handleEdit(user)}>
                      Edit
                    </span>
                    {showDeleteUser ? (
                      <DeleteUser userId={user.id} />
                    ) : (
                      <span className="btn-delete" onClick={handleShowDelete}>
                        Delete
                      </span>
                    )}
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
