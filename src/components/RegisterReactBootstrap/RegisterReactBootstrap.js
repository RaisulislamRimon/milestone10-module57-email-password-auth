import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { Link } from "react-router-dom";

const RegisterReactBootstrap = () => {
  const auth = getAuth();

  const [success, setSuccess] = useState(false);
  const [passwordError, setPasswordError] = useState("");

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

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setSuccess(true);
        form.reset();
        verifyEmail();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        setPasswordError(errorCode);
      });
  };

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      alert("Please verify your email");
    });
  };

  return (
    <div className="w-50 mx-auto">
      <h3 className="text-primary text-center">Please Register</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
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
        {success && <p className="text-success">User created successfully.</p>}

        <div className="text-center">
          <Button variant="primary" type="submit">
            Register
          </Button>
          <p>
            Already a member? <Link to="/login">Login</Link>
          </p>
        </div>
      </Form>
    </div>
  );
};

export default RegisterReactBootstrap;
