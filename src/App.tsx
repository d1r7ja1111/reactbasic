import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import Table from "./components/Table";
import './styles/Style.css';


const App: React.FC = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4 fw-bold text-primary">test</h1>
      <Table />
    </div>
  );
};

export default App;

