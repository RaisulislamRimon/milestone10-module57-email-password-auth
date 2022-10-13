import "./App.css";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebaseConfig from "./firebaseConfig/firebaseConfig";
import Form from "./components/Form/Form";

function App() {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
