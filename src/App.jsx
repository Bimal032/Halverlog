import Home from "./pages/home/Home";
import LoginPage from "./pages/loginPage/LoginPage";
import Register from "./pages/registerpage/Register";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Leftbar from "./components/leftbar/Leftbar";
import Rightbar from "./components/rightbar/Rightbar";
import Profile from "./pages/profile/Profile";
import ProfilePage from "./components/ProfilePage/ProfilePage";



// const Layout = () => {
//   return (
//     <div>
//       <Navbar />
//       <div style={{ display: "flex" }}>
//         <Leftbar />
//         <div>
//           <Outlet />
//         </div>

//         <Rightbar />
//       </div>
//     </div>
//   );
// };

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/profile/:id",
//         element: <Profile />,
//       },
//     ],
//   },

//   {
//     path: "/login",
//     element: <LoginPage />,
//   },

//   {
//     path: "/register",
//     element: <Register />,
//   },
//   {
//     path: "/home",
//     element: <Home />,
//   },
// ]);

function App() {
  return (
    <>
      {/* <RouterProvider router={router} /> */}
      {/* <Register/> */}
      <ProfilePage/>
    </>
  );
}

export default App;
