"@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isLoggedInState } from "./LoginPage";
import { Main, openState } from "./AppNavBar";
import Typography from "@mui/material/Typography";
import "./style.css";

function LandingPage() {
  const [isLoggedIn] = useRecoilState(isLoggedInState);
  const [open] = useRecoilState(openState);
  const navigate = useNavigate();
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
            View Course
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
