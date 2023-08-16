import React, { useState, useEffect } from "react";
import axios from "axios";
import "./BookCategory.css";
import SearchBook from "../SearchBook/SearchBook";
import { Link } from "react-router-dom";
import AddBookForm from "../AddBook/AddBookForm";
import { ToastContainer, toast } from 'react-toastify';

const BookCategory = () => {
  const [books, setBooks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
   const [triggerUpdate,setTriggerUpdate] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/books/fetch-from-mongo")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [triggerUpdate]);

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  const dataToRender = searchResults.length > 0 ? searchResults : books;

  const handleDeleteBook = async (bookId) => {
    try {
      await axios.delete(`http://localhost:5000/api/books/${bookId}`);
      // Update the books state after successful deletion
      setBooks((prevBooks) => prevBooks.filter((book) => book._id !== bookId));
      toast.success(`Book deleted successfully!`);
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <section className="book-category">
      <h2>Book Category</h2>
      <SearchBook onSearchResults={handleSearchResults} />
      <AddBookForm onBookAdded={() => setTriggerUpdate(!triggerUpdate)} />
      <table className="book-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>ISBN</th>
            <th>Author</th>
            <th>Available</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dataToRender.length > 0 ? (
            dataToRender.map((book) => (
              <tr key={book._id}>
                <td>{book.bookID}</td>
                <td>{book.title}</td>
                <td>{book.isbn}</td>
                <td>{book.authors}</td>
                <td>{book.available}</td>
                <td>
  <div className="edit-button">
    <Link to={`/edit/${book._id}`} className="btn btn-primary">
      Edit
    </Link>
  </div>
  <div className="delete-button">
    <button
      className="btn btn-danger"
      onClick={() => handleDeleteBook(book._id)}
    >
      Delete
    </button>
    <ToastContainer />
  </div>
</td>


              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No books available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
};

export default BookCategory;
