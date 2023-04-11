import React from "react";
import { useNavigate } from "react-router-dom";

export default function Splash() {
  const navigate = useNavigate();

  function redirect() {
    navigate("/game");
  }

  return (
    <React.Fragment>
      <h1>WELCOME!</h1>
      <p>Redirecting in 5 seconds</p>
      {setInterval(redirect, 5000)}
    </React.Fragment>
  );
}
