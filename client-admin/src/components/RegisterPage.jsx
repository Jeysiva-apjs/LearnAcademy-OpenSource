import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { adminState } from "../store/atoms/admin";

import "../index.css";

function RegisterPage() {
  const [admin, setAdmin] = useRecoilState(adminState);
  const [message, setMessage] = useState();

  const navigate = useNavigate();

  const handleRegister = async () => {
    if (admin.email.trim() === "" || admin.password.trim() == "") {
      setMessage("Email/Password field cannot be empty.");
      return;
    } else {
      try {
        const response = await axios.post(
          "http://localhost:3000/admin/signup",
          {
            username: admin.email,
            password: admin.password,
          }
        );

        setAdmin({
          email: "",
          passowrd: "",
          isLoggedIn: true,
        });
        localStorage.setItem("token", response.data.token);

        setMessage("");
        alert(response.data.message);
        navigate("/courses");
      } catch (err) {
        console.log(err);
        setMessage(err.response.data.message);
      }
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
          Register An Admin Account
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
          value={admin.email}
          onChange={(e) =>
            setAdmin((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          type="password"
          value={admin.password}
          onChange={(e) =>
            setAdmin((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        <Button
          style={{ backgroundColor: "#101460" }}
          className="button"
          variant="contained"
          onClick={handleRegister}
        >
          Register
        </Button>
        <br></br>
        <div>
          <h3 style={{ fontWeight: "500" }}>
            Already a user? Click here to login.
          </h3>
          <br />
          <Button
            style={{ backgroundColor: "#101460" }}
            className="button"
            variant="contained"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default RegisterPage;
