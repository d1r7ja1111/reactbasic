import React, { useState } from "react";
import type { User } from "../types/User";
import Form from "./Form";
import Row from "./Row";
import Pagination from "./Pagination";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Style.css';

const Table: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    { name: "AAAA", surname: "Surname", email: "emailo@email.org" },
    { name: "BBBB", surname: "Test", email: "emmmm@eeee.com"},
    { name: "Rin", surname: "Kagamine", email: "gdyeg@crypton.com"},
    { name: "Len", surname: "Kagamine", email: "wwwww@ded.jsi"}
  ]);

  const [newUser, setNewUser] = useState<User>({
    name: "",
    surname: "",
    email: "",
  });

  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editingUser, setEditingUser] = useState<User>({
    name: "",
    surname: "",
    email: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 2;
  const totalPages = Math.ceil(users.length / rowsPerPage);
  const paginatedUsers = users.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  const addUser = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!newUser.name.trim() || !newUser.surname.trim() || !newUser.email.trim()) {
      alert("Please fill all fields.");
      return;
    }
  
    if (!emailRegex.test(newUser.email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    if (newUser.name.length > 30 || newUser.surname.length > 30) {
      alert("Name and surname must be under 30 characters.");
      return;
    }
  
    setUsers([...users, newUser]);
    setNewUser({ name: "", surname: "", email: "" });
  };
  

  const deleteUser = (index: number) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  const startEdit = (index: number) => {
    setEditingIndex(index);
    setEditingUser(users[index]);
  };

  const saveEdit = () => {
    if (editingIndex === null) return;
    const updated = [...users];
    updated[editingIndex] = editingUser;
    setUsers(updated);
    cancelEdit();
  };

  const cancelEdit = () => {
    setEditingIndex(null);
    setEditingUser({ name: "", surname: "", email: ""});
  };

  return (
    <div className="card p-3">
      <Form newUser={newUser} setNewUser={setNewUser} addUser={addUser} />

      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedUsers.map((user, index) => {
            const globalIndex = (currentPage - 1) * rowsPerPage + index;
            return (
              <Row
                key={globalIndex}
                user={user}
                index={globalIndex}
                editingIndex={editingIndex}
                editingUser={editingUser}
                startEdit={startEdit}
                deleteUser={deleteUser}
                saveEdit={saveEdit}
                cancelEdit={cancelEdit}
                setEditingUser={setEditingUser}
              />
            );
          })}
        </tbody>
      </table>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Table;
