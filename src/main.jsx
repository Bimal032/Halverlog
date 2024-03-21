import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import LoginPage from "./pages/loginPage/LoginPage.jsx";
import Register from "./pages/registerPage/Register.jsx";
import ProfilePage from "./components/ProfilePage/ProfilePage.jsx";
import Home from "./pages/home/Home.jsx";
// import AuthLayout from "./AuthLayout.jsx";
import store from "./store/store.js";
import SearchPage from "./components/searchpage/SearchPage.jsx";
import Friends from "./components/friendpage/Friends.jsx";
import Message from "./components/message/message.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },

      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/profile/:id",
        element: <ProfilePage />,
      },
      {
        path: "/friends",
        element: <Friends />,
      },
      {
        path: "/message",
        element: <Message />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
