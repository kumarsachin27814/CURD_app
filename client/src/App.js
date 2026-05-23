import AddUser from "./adduser/AddUser";
import "./App.css";
import User from "./getUser/User";
import Update from "./updateuser/Update";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <User />,
    },
    {
      path: "/add",
      element: <AddUser />,
    },
    {
      path: "/update/:id",
      element: <Update />,
    },
  ]);

  return (
    <div className="App">
      <Toaster />

      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
