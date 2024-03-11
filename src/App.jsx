import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { login, logout } from "./store/authSlice";
import authService from "./appwrite/auth";
import Loader from "./components/Loader/Loader";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) dispatch(login({ userData }));
        else dispatch(logout());
      })
      .finally(() => setLoading(false));
  }, [dispatch]);
  return <>{loading ? <Loader /> : <Outlet />}</>;
}

export default App;
