import React, { useState } from "react";
import DatePicker from "react-datepicker";
import type { User } from "../types/User";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Style.css';

interface Props {
  user: User;
  index: number;
  editingIndex?: number | null;
  editingUser: User;
  startEdit: (index: number) => void;
  deleteUser: (index: number) => void;
  saveEdit: () => void;
  cancelEdit: () => void;
  setEditingUser: React.Dispatch<React.SetStateAction<User>>;
}

const Row: React.FC<Props> = ({
  user,
  index,
  editingIndex,
  editingUser,
  startEdit,
  deleteUser,
  saveEdit,
  cancelEdit,
  setEditingUser,
}) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <tr>
      {editingIndex === index ? (
        <>
          <td>
            <input
              className="form-control"
              value={editingUser.name}
              onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
            />
          </td>
          <td>
            <input
              className="form-control"
              value={editingUser.surname}
              onChange={(e) => setEditingUser({ ...editingUser, surname: e.target.value })}
            />
          </td>
          <td>
            <input
              className="form-control"
              value={editingUser.email}
              onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
            />
          </td>
          <td>
            <DatePicker
              selected={editingUser.startDate}
              onChange={(date) => 
                date && setEditingUser({ ...editingUser, startDate: date })}
              className="form-control"
            />
          </td>
          <td>
            <DatePicker
              selected={editingUser.endDate}
              onChange={(date) => 
                date && setEditingUser({ ...editingUser, endDate: date })}
              className="form-control"
            />
          </td>
          <td>
            <button className="btn btn-primary btn-sm me-2 mb-2" onClick={saveEdit}>
              Save
            </button>
            <button className="btn btn-secondary btn-sm" onClick={cancelEdit}>
              Cancel
            </button>
          </td>
        </>
      ) : (
        <>
          <td>{user.name}</td>
          <td>{user.surname}</td>
          <td>{user.email}</td>
          <td>{user.startDate ? user.startDate.toLocaleDateString() : "-"}</td>
          <td>{user.endDate ? user.endDate.toLocaleDateString() : "-"}</td>
          <td style={{ position: "relative" }}>
            <button
              className="btn btn-light btn-sm"
              onClick={() => setShowMenu(!showMenu)}
            >
              ⋮
            </button>
            {showMenu && (
              <div className="menu-dropdown">
                <button
                  className="btn btn-sm btn-outline-primary w-100 mb-1"
                  onClick={() => {
                    startEdit(index);
                    setShowMenu(false);
                  }}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-outline-danger w-100"
                  onClick={() => {
                    deleteUser(index);
                    setShowMenu(false);
                  }}
                >
                  Delete
                </button>
              </div>
            )}
          </td>
        </>
      )}
    </tr>
  );
};

export default Row;
