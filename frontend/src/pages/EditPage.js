import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { TextField, Button,  } from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';

import "@mui/material/TextField";
import "@mui/material/Button";
import "react-toastify/dist/ReactToastify.css";
import "./EditPage.css";

const EditPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [editedBook, setEditedBook] = useState({});

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/books/${id}`);
        setBook(response.data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchBookDetails();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedBook((prevBook) => ({ ...prevBook, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/books/update/${id}`, editedBook);
      toast.success("Book details updated successfully!");
    } catch (error) {
      console.error("Error updating book details:", error);
      toast.error("Error updating book details");
    }
  };

  return (
    <div className="edit-page-container">
      <h1>Edit Book Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <TextField
            label="Title"
            name="title"
            value={editedBook.title || book.title}
            onChange={handleInputChange}
            fullWidth
            variant="outlined"
            size="small"
            placeholder="Enter title"
          />
        </div>
        <div className="form-group">
          <TextField
            label="Authors"
            name="authors"
            value={editedBook.authors || book.authors}
            onChange={handleInputChange}
            fullWidth
            variant="outlined"
            size="small"
            placeholder="Enter authors"
          />
        </div>
        <div className="form-group">
          <TextField
            label="ISBN"
            name="isbn"
            value={editedBook.isbn || book.isbn}
            onChange={handleInputChange}
            fullWidth
            variant="outlined"
            size="small"
            placeholder="Enter ISBN"
          />
        </div>
        <div className="form-group">
          <TextField
            label="Language Code"
            name="language_code"
            value={editedBook.language_code || book.language_code}
            onChange={handleInputChange}
            fullWidth
            variant="outlined"
            size="small"
            placeholder="Enter language code"
          />
        </div>
        {/* Add more fields using TextField component */}
        <div className="form-group">
          <TextField
            label="Available"
            name="available"
            value={editedBook.available || book.available}
            onChange={handleInputChange}
            fullWidth
            variant="outlined"
            size="small"
            placeholder="Enter available quantity"
          />
        </div>
        <div className="form-group">
          <Button type="submit" variant="contained" color="primary">
            Save Changes
          </Button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default EditPage;
