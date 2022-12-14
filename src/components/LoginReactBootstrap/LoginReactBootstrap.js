import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Link } from "react-router-dom";

const LoginReactBootstrap = () => {
  const auth = getAuth();

  const [success, setSuccess] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(false);

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(e.target.name, e.target.name.value);
    // console.log(name, password);

    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setPasswordError("Password must be at least two uppercase letters");
      return;
    }

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return;
    }

    if (!/(?=.*[!@#$&*])/.test(password)) {
      setPasswordError("Password must contain special characters");
      return;
    }

    setPasswordError("");

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setSuccess(true);
        form.reset();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        setPasswordError(errorCode);
      });
  };

  const handleEmailBlur = (e) => {
    const email = e.target.value;
    setUserEmail(email);
    // console.log("email", email);
    // console.log("userEmail: ", userEmail);
  };

  const handleForgetPassword = () => {
    // console.log("Forget Password");
    if (!userEmail) {
      alert("Please enter your email");
      return;
    }
    sendPasswordResetEmail(auth, userEmail)
      .then(() => {
        // Password reset email sent!
        // ..
        alert("Password reset email sent!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorMessage);
        setPasswordError(errorCode);
      });
  };

  return (
    <div className="w-50 mx-auto">
      <h2 className="text-center text-primary">Login React Bootstrap</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handleEmailBlur}
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <p className="text-danger">{passwordError}</p>
        {success && (
          <p className="text-success">User logged in successfully.</p>
        )}
        <div className="text-center">
          <Button variant="primary" type="submit">
            Login
          </Button>
          <p>
            Not a member? <Link to="/register">Register</Link>
          </p>
          <p>
            Forget Password ?{" "}
            <button
              onClick={handleForgetPassword}
              type="button"
              className="btn btn-link"
            >
              Please Reset
            </button>
          </p>
        </div>
      </Form>
    </div>
  );
};

export default LoginReactBootstrap;
