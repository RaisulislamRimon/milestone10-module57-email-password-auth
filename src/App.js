import "./App.css";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebaseConfig from "./firebaseConfig/firebaseConfig";

function App() {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(e.target.email.value, e.target.password.value);
    console.log(email, password);
  };

  const handleEmailChange = (e) => {
    console.log(e.target.value);
  };

  const handlePasswordChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="App">
      <form onSubmit={handleRegister}>
        <input
          onChange={handleEmailChange}
          type="email"
          name="email"
          id="email"
          placeholder="email"
        />
        <br />
        <input
          onChange={handlePasswordChange}
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
