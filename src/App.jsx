import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import DashBoard from "./components/DashBoard";
import CompletedTodos from "./components/CompletedTodos";

function App() {
  return (
    <BrowserRouter>
      <AuthRedirect />
      <Routes>
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/completed" element={<CompletedTodos />} />
      </Routes>
    </BrowserRouter>
  );
}

function AuthRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/signin");
    }
  }, [navigate]);

  return null;
}

export default App;
