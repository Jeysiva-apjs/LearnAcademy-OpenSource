import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RecoilRoot } from "recoil";

// const options = {
//   // passing the client secret obtained from the server
//   clientSecret: '{{CLIENT_SECRET}}',
// };

ReactDOM.createRoot(document.getElementById("root")).render(
  // had to remove React.StrictMode as everything runs twice and course is purchased twice.
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);


