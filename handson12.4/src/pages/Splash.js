import React from "react";
import { useNavigate } from "react-router-dom";

export default function Splash() {
  const navigate = useNavigate();

  function redirect() {
    setTimeout(() => {
      navigate("/game");
    }, 5000);
  }

  // useEffect(() => {
  //   setTimeout(() => {
  //     redirect();
  //   }, 5000);
  // });

  return (
    <React.Fragment>
      <h1>WELCOME!</h1>
      <p>Redirecting in 5 seconds</p>
      {redirect()}
    </React.Fragment>
  );
}
