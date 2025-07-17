import "./SignUpForm.css";
import { useState, useMemo } from "react";
import { Link } from "react-router";
import { FormManager, type TFormData } from "../../utilities/FormManager";


function SignUpForm() {
  const formManager = useMemo(() => new FormManager(), [])
//get metod
const  [formData, setFormData] = useState<TFormData>(formManager.formData);


const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
  const {name, value} = e.target
   const updatedState = formManager.updateFieldValue(name as keyof TFormData, value);
   //rerender the component>
   setFormData(updatedState);

}

const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
  e.preventDefault()
const {isValid, data } = formManager.validateForm()
setFormData(data)

    if (isValid) {
      // Extract only the values for submission
      const submissionData= {} as { [K in keyof TFormData]: string | null };
      Object.keys(data).forEach((key) => {
        submissionData[key as keyof TFormData] =
          data[key as keyof TFormData].value;
      });

      console.log('Form is valid; Submit data:', submissionData);
      //  api call here
      formManager.resetForm(); 
      setFormData(formManager.formData);
    } else {
      console.log('Form is invalid');
     
    }
  };



  // const form = new FormUtility();
// console.log(form.emailValidator('natia@mail.com')); 
// console.log(form.passwordValidator('natiaaa'))
// console.log(form.repeatPasswordValidator('natiaaa', 'natiaaa'))


    return (
    <>
      <section className="signUp parent">
        <form onSubmit={handleSubmit}>
          <h1>Sign up</h1>
          <div className="wrapper">
            <div className="name">
              <label htmlFor="firstName">First Name *</label>
              <input
                type="text"
                value={formData.firstName.value || ''}
                id="firstName"
                name="firstName" // <--- ADD THIS LINE
                onChange={handleInputChange}
              />
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name *</label>
              <input
                type="text"
                value={formData.lastName.value || ''}
                id="lastName"
                name="lastName" // <--- ADD THIS LINE
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="email">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              value={formData.email.value || ''}
              id="email"
              name="email" // <--- ADD THIS LINE
              onChange={handleInputChange}
            />
          </div>

          <div className="text">
            <label htmlFor="password">password *</label>
            <input
              type="password"
              value={formData.password.value || ''}
              id="password"
              name="password" // <--- ADD THIS LINE
              onChange={handleInputChange}
            />
          </div>
          <div className="text">
            <label htmlFor="repeatPassword">Repeat password *</label>
            <input
              type="password"
              value={formData.repeatPassword.value || ''}
              id="repeatPassword"
              name="repeatPassword" // <--- ADD THIS LINE
              onChange={handleInputChange}
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