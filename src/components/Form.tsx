import React from "react";
import DatePicker from "react-datepicker";
import type {User} from "../types/User";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Style.css';

interface UserFormProps {
  newUser: User;
  setNewUser: React.Dispatch<React.SetStateAction<User>>;
  addUser: () => void;
}

const Form: React.FC<UserFormProps> = ({ newUser, setNewUser, addUser }) => (
  <div className="d-flex flex-wrap gap-2 mb-3">
    <input
      type="text"
      className="form-control"
      placeholder="Name"
      value={newUser.name}
      onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
    />
    <input
      type="text"
      className="form-control"
      placeholder="Surname"
      value={newUser.surname}
      onChange={(e) => setNewUser({ ...newUser, surname: e.target.value })}
    />
    <input
      type="email"
      className="form-control"
      placeholder="Email"
      value={newUser.email}
      onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
    />
    <DatePicker
      selected={newUser.startDate}
      onChange={(date) => 
        date && setNewUser({ ...newUser, startDate: date })}
      placeholderText="Start Date"
      className="form-control"
    />
    <DatePicker
      selected={newUser.endDate}
      onChange={(date) => 
        date && setNewUser({ ...newUser, endDate: date })}
      placeholderText="End Date"
      className="form-control"
    />
    <button className="btn btn-success" onClick={addUser}>Add</button>
  </div>
);

export default Form;
