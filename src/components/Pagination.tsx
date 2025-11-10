import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Style.css';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, setCurrentPage }) => (
  <nav className="d-flex justify-content-between">
    <button
      className="btn btn-outline-secondary"
      disabled={currentPage === 1}
      onClick={() => setCurrentPage(currentPage - 1)}
    >
      Previous
    </button>

    <ul className="pagination mb-0">
      {Array.from({ length: totalPages }, (_, i) => (
        <li key={i} className={`page-item ${currentPage === i + 1 ? "active" : ""}`}>
          <button className="page-link" onClick={() => setCurrentPage(i + 1)}>
            {i + 1}
          </button>
        </li>
      ))}
    </ul>

    <button
      className="btn btn-outline-secondary"
      disabled={currentPage === totalPages}
      onClick={() => setCurrentPage(currentPage + 1)}
    >
      Next
    </button>
  </nav>
);

export default Pagination;
