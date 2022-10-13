import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebaseConfig from "./firebaseConfig/firebaseConfig";
import Form from "./components/Form/Form";
import RegisterReactBootstrap from "./components/RegisterReactBootstrap/RegisterReactBootstrap";

function App() {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  return (
    <div className="">
      <RegisterReactBootstrap />
      <Form />
    </div>
  );
}

export default App;
