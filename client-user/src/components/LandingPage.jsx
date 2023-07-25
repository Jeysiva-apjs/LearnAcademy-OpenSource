"@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { Main, openState } from "./AppNavBar";
import { userIsLoggedInState } from "../store/selectors/userIsLoggedIn";
import "./style.css";

function LandingPage() {
  const [isLoggedIn] = useRecoilState(userIsLoggedInState);
  const [open] = useRecoilState(openState);
  const navigate = useNavigate();
  console.log(isLoggedIn);
  return (
    <Main open={open}>
      <div className="landing-page-container">
        <div className="text-content">
          <h1 className="title">
            Become the{" "}
            <span style={{ color: "#bc1c44" }}>software engineer</span> that
            companies love to hire
          </h1>

          <button
            className="button-style"
            onClick={() => navigate(isLoggedIn ? "/courses" : "/login")}
          >
            {isLoggedIn ? "View Courses" : "Login Here"}
          </button>
        </div>
        <div>
          <img
            className="img-content"
            src="https://opensource.com/sites/default/files/lead-images/browser_web_internet_website.png"
            alt=""
          />
        </div>
      </div>
    </Main>
  );
}

export default LandingPage;
