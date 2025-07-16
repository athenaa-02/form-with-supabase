import { Link } from "react-router"
import "./button.css"

function SignInBtn() {
  return (
    <>
      <Link to={"/sign-in"}>
        <button className="signInBtn">Sign In</button>
      </Link>
    </>
  )
}

export default SignInBtn
