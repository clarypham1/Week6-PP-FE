import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// pages & components
import Home from "./pages/HomePage";
import AddBookPage from "./pages/AddBookPage";
import Navbar from "./components/Navbar";
import NotFoundPage from "./pages/NotFoundPage";
import BookPage from "./pages/BookPage";
import EditBookPage from "./pages/EditBookPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-book" element={<AddBookPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/books/:id" element={<BookPage />} />
            <Route path="/edit-book/:id" element={<EditBookPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

