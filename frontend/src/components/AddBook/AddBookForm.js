import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
const AddBookForm = ({ onBookAdded }) => {
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/books/add", {
        title,
        quantity,
      });
      onBookAdded(response.data);
      setTitle("");
      setQuantity(1);
      toast.success(`${title} Added successfully!`);
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  return (
    <section className="add-book">
      <h2 className="mb-4">Add Books</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            className="form-control"
            placeholder="Enter book title"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="quantity" className="form-label">
            Quantity:
          </label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={handleQuantityChange}
            min={1}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary m-1">
          Add
        </button>
      </form>
    </section>
  );
};

export default AddBookForm;
