import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import "../index.css";
import { atom, useRecoilState } from "recoil";

const emailState = atom({
  key: "emailState",
  default: "",
});

const passwordState = atom({
  key: "passwordState",
  default: "",
});

const isLoggedInState = atom({
  key: "isLoggedInState",
  default: false,
});

function LoginPage() {
  const [email, setEmail] = useRecoilState(emailState);
  const [password, setPassword] = useRecoilState(passwordState);
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);

  const navigate = useNavigate();

  const handleLogin = () => {
    if (email.trim() === "" || password.trim() == "") {
      setMessage("Email/Password field cannot be empty.");
      return;
    } else {
      fetch("http://localhost:3000/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem("token", data.token);
          if (data.message === "Invalid username or password") {
            setMessage(data.message);
            return;
          }
          setEmail("");
          setPassword("");
          setIsLoggedIn(true);
          setMessage("");
          navigate("/courses");
          window.location.reload();
        });
    }
  };

  return (
    <div className="page">
      <div className="title">
        <Typography
          variant="h4"
          component="div"
          style={{
            flexGrow: 1,
            padding: "10px",
            borderRadius: "4px",
            fontWeight: "bold",
            color: "#101460",
            textAlign: "center",
            marginTop: "50px",
            marginBottom: "10px",
          }}
        >
          Login To Admin Dashboard
        </Typography>

        {message && (
          <div>
            <p
              style={{
                textAlign: "center",
                color: "#bc1c44",
                fontWeight: "500",
                fontSize: "20px",
                marginBottom: "5px",
              }}
            >
              {message}
            </p>
          </div>
        )}
      </div>

      <Card className="form">
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          style={{ backgroundColor: "#101460" }}
          className="button"
          variant="contained"
          onClick={handleLogin}
        >
          Login
        </Button>
        <br></br>
        <div>
          <h3 style={{ fontWeight: "500" }}>
            New here? Click here to register new account.
          </h3>
          <br />
          <Button
            style={{ backgroundColor: "#101460" }}
            className="button"
            variant="contained"
            onClick={() => navigate("/register")}
          >
            Register
          </Button>
        </div>
      </Card>
    </div>
  );
}
export { isLoggedInState };

export default LoginPage;
