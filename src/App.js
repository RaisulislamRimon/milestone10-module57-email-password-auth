import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebaseConfig from "./firebaseConfig/firebaseConfig";
import Form from "./components/Form/Form";
import RegisterReactBootstrap from "./components/RegisterReactBootstrap/RegisterReactBootstrap";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Main from "./layouts/Main";

function App() {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <RegisterReactBootstrap />,
        },
        {
          path: "/register",
          element: <RegisterReactBootstrap />,
        },
        {
          path: "/form",
          element: <Form />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
