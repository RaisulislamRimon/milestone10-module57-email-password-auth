import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebaseConfig from "./firebaseConfig/firebaseConfig";
import Form from "./components/Form/Form";
import RegisterReactBootstrap from "./components/RegisterReactBootstrap/RegisterReactBootstrap";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Main from "./layouts/Main";
import LoginReactBootstrap from "./components/LoginReactBootstrap/LoginReactBootstrap";

function App() {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <RegisterReactBootstrap />,
        },
        {
          path: "/login",
          element: <LoginReactBootstrap />,
        },
        {
          path: "/register",
          element: <RegisterReactBootstrap />,
        },
        {
          path: "/form",
          element: <Form />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
      errorElement: <NotFound />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
