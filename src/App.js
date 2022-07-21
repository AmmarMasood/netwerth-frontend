import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Main from "./pages/dashboard/Main";
import AdminMain from "./pages/adminDashboard/Main";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import { useContext, useEffect } from "react";
import { getCurrentUser } from "./services/auth";
import { userInfoContext } from "./context/UserContext";

function App() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useContext(userInfoContext);

  useEffect(() => {
    getCurrentUser(navigate, setUserInfo);
  }, []);
  return (
    <Routes>
      <Route element={<Home />} path="/" exact />
      <Route element={<Login />} path="/login" exact />
      <Route element={<Signup />} path="/signup" exact />
      <Route element={<Main />} path="/dashboard" exact />
      <Route element={<AdminMain />} path="/admin/dashboard" exact />
    </Routes>
  );
}

export default App;
