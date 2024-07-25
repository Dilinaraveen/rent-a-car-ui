import "./App.css";
import Home from "./pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Cars from "./components/Cars/Cars";
import Bookings from "./components/Bookings/Bookings";
import { useSelector } from "react-redux";
import PrivateRoute from "./utilities/privateRoute";


function App() {

  const { isAuthenicated } = useSelector((state) => state.auth);

  return (
    <div className="font-outfit">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<PrivateRoute element={Dashboard} />}>
            <Route path="cars" element={<PrivateRoute element={Cars} />} />
            <Route path="bookings" element={<PrivateRoute element={Bookings} />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
