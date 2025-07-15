import "./FormComponent.css";
import { useState } from "react";

function FormComponent() {
  const [firstName, setFirstName] = useState("natia");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [query, setQuery] = useState("general");
  const [agreeRules, setAgreeRules] = useState(false);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log('first name: ', firstName)
    console.log('last name: ', lastName)
    console.log('email: ', email)
    console.log('query:  ', query)
    console.log('message: ', message)
    console.log('agree rules:', agreeRules)




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
  const queryHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };
  const textChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
setMessage(event.target.value)
  }
  const agreementHandler = (event: React.ChangeEvent<HTMLInputElement> ) =>{
setAgreeRules(event.target.checked)
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <h1>Contact Us</h1>
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
        <p>Query Type *</p>
        <div className="query">
          <aside>
            <input
              type="radio"
              name="query"
              value='general'
              checked={query === "general"}
              id="general"
              onChange={queryHandler}
            />
            <label htmlFor="radio">General Enquiry</label>
          </aside>
          <aside>
            <input
              type="radio"
              name="query"
              value='support'
              checked={query === "support"}
              onChange={queryHandler}
              id="support"
            />
            <label htmlFor="support">Support Request</label>
          </aside>
        </div>
        <div className="text">
          <label htmlFor="text">Message *</label>
          <input type="text" value={message} id="text" onChange={textChangeHandler}/>
        </div>
        <div className="agreement">
          <input type="checkbox" name="agreement" id="agreement"   checked={agreeRules === true} onChange={agreementHandler} />
          <label htmlFor="agreement">
            I consent to being contacted by the team *
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default FormComponent;
