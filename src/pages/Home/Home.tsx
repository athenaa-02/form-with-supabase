import SingInBtn from "../../components/buttons/SignInBtn";
import SignUpBtn from "../../components/buttons/SignUpBtn";
import "./Home.css";

function Home() {
  return (
    <>
      <main>
        <h1>welcome!</h1>
        <div className="buttons">
          <SignUpBtn></SignUpBtn>
          <SingInBtn></SingInBtn>
        </div>
      </main>
    </>
  );
}

export default Home;
