import './SignInForm.css'
import { useState } from "react";
import { Link } from 'react-router';
import type { FormManager, TFormData } from '../../utilities/FormManager';

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("email: ", email);
    console.log("password: ", password);
  };

  const changeEmailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(event.target.value);
  };


  return (
  <>
   <section className="signIn parent">
      <form onSubmit={submitHandler}>
        <h1>Sign in</h1>
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
        <button type="submit">Submit</button>
        <Link to={'/sign-up'} className='link'>
        <p className='signLinks'>sign up</p>
        </Link>
      </form>
      </section>
  </>
  )
}
export default SignInForm;
