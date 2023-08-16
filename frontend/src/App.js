import React, { useState } from "react";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import BookCategory from "./components/BookCategory";
import AddBookForm from "./components/AddBook/AddBookForm";
import EditPage from "./pages/EditPage";
import "./App.css";

const App = () => {
  const [books, setBooks] = useState([]);

  const handleBookAdded = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <HeroSection />
    
        <Routes>
      
          <Route path="/" element={<BookCategory books={books} setBooks={setBooks} />} />
          <Route path="/add" element={<AddBookForm onBookAdded={handleBookAdded} />} />
          <Route path="/edit/:id" element={<EditPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
