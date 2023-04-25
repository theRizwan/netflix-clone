/* eslint-disable react/prop-types */
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";

function Protected({ children }) {
  const user = true;
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
}

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Protected><HomeScreen /> </Protected>} />
          <Route path="/profile" element={<Protected><Profile /> </Protected>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
