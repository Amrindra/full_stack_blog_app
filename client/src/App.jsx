import "./App.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Registerpage from "./pages/registerpage/Registerpage";
import LoginPage from "./pages/loginPage/LoginPage";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Singlepage from "./pages/singlePage/Singlepage";
import Write from "./pages/write/Write";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/post/:id",
        element: <Singlepage />,
      },
      {
        path: "/write",
        element: <Write />,
      },
    ],
  },
  {
    path: "/register",
    element: <Registerpage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
