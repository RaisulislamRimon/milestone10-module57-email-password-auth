const Form = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(e.target.email.value, e.target.password.value);
    console.log(email, password);
  };

  const handleEmailBlur = (e) => {
    console.log(e.target.value);
  };

  const handlePasswordBlur = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="App">
      <form onSubmit={handleRegister}>
        <input
          onBlur={handleEmailBlur}
          type="email"
          name="email"
          id="email"
          placeholder="email"
        />
        <br />
        <input
          onBlur={handlePasswordBlur}
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
};

export default Form;
