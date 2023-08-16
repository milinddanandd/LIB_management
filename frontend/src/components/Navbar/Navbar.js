import React, { useState } from "react";
import Modal from "react-modal";
import "./Navbar.css";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-title">Library Management System</div>
      <button className="login-button" onClick={openModal}>
        Login
      </button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Login Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <button className="login-submit-button">Login</button>
          <p>
            Not registered? <a href="#">Register</a>
          </p>
        </form>
        <button className="modal-close-button" onClick={closeModal}>
          Close
        </button>
      </Modal>
    </nav>
  );
};

export default Navbar;
