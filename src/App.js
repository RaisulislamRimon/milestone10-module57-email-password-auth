import "./App.css";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebaseConfig from "./firebaseConfig/firebaseConfig";

function App() {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div className="App">
      <form onSubmit={handleRegister}>
        <input type="email" name="email" id="email" placeholder="email" />
        <br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
