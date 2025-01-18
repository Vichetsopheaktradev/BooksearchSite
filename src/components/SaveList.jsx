import React from "react";
import PropTypes from "prop-types";

function SaveList({ savedBooks, onClose }) {
  if (savedBooks.length === 0) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-11/12 max-w-md p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Saved Books</h2>
        <p className="text-gray-600 mb-4">
          These are the books you have saved. You can reference them later.
        </p>
        <ul className="mb-4">
          {savedBooks.map((book) => (
            <li
              key={book.id}
              className="p-2 mb-2 border-b border-gray-300 text-black"
            >
              {book.title}
            </li>
          ))}
        </ul>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
          onClick={onClose} // Calls the onClose prop passed from App.js
        >
          Close
        </button>
      </div>
    </div>
  );
}

SaveList.propTypes = {
  savedBooks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClose: PropTypes.func.isRequired, // Ensure onClose is a required prop
};

export default SaveList;
