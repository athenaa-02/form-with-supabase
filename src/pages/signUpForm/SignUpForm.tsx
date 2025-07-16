import "./SignUpForm.css";
import { useState } from "react";
import { Link } from "react-router";


function SignUpForm() {
  const [firstName, setFirstName] = useState("natia");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeRules, setAgreeRules] = useState(false);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("first name: ", firstName);
    console.log("last name: ", lastName);
    console.log("email: ", email);
    console.log("password: ", password);
    console.log("agree rules:", agreeRules);
  };

  const firstNameChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFirstName(event.target.value);
  };
  const changeLastNameHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLastName(event.target.value);
  };
  const changeEmailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(event.target.value);
  };
  const agreementHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAgreeRules(event.target.checked);
  };
  return (
    <>
    <section className="signUpParent">
      <form onSubmit={submitHandler}>
        <h1>Sign up</h1>
        <div className="wrapper">
          <div className="name">
            <label htmlFor="firstName">First Name *</label>
            <input
              type="text"
              value={firstName}
              id="firstName"
              onChange={firstNameChangeHandler}
            />
          </div>
          <div className="lastName">
            <label htmlFor="lastName">Last Name *</label>
            <input
              type="text"
              value={lastName}
              id="lastName"
              onChange={changeLastNameHandler}
            />
          </div>
        </div>
        <div className="email">
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            value={email}
            id="email"
            onChange={changeEmailHandler}
          />
        </div>

        <div className="text">
          <label htmlFor="password">password *</label>
          <input
            type="password"
            value={password}
            id="password"
            onChange={passwordChangeHandler}
          />
        </div>
        <div className="text">
          <label htmlFor="password">Repeat password *</label>
          <input
            type="password"
            value={password}
            id="password"
            onChange={passwordChangeHandler}
          />
        </div>
        
        <button type="submit">Submit</button>
        <Link to={'/sign-in'} className="link">
        <p className='signLinks'>sign in</p>
        </Link>
      </form>
      </section>
    </>
  );
}
export default SignUpForm;
