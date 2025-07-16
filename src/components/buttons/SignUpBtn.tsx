import { Link } from "react-router"
import "./button.css"

function SignUpBtn() {
  return (
    <>
    <Link to={'/sign-up'}>
    <button className="signUpBtn">Sign up</button>
    </Link>
    </>
  )
}

export default SignUpBtn
