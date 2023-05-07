import "./App.css";
import { AuthContext } from "./context/AuthContext";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import { useContext } from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path='/'
            element={user? <Home /> : <Register/>}
          />
          <Route
            path='/login'
            element={user? <Navigate to={"/"} /> : <Login/>}
          />
          <Route
            path='/register'
            element={user?  <Navigate to={"/"} /> : <Register/>}
          />
          <Route
            path='/profile/:username'
            element={<Profile />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
