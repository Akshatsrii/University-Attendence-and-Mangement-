import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Footer from "./components/Footer/Footer";
import ThemeToggle from "./components/common/ThemeToggle";



import "./styles/global.css";   // 🔥 theme variables
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      {/* 🌗 Global Theme Toggle */}
      <ThemeToggle />

      {/* 🔀 Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {/* 🔻 Footer (all pages) */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
