import React from "react";
import { useLocation } from "react-router-dom";

export default function SubmittedForm() {
  const location = useLocation();

  const name = location.state.formData.name;
  const email = location.state.formData.email;
  const comments = location.state.formData.comments;

  return (
    <React.Fragment>
      <h1>Thank you for your enquiry</h1>
      <p>We will get back to you in 3 working days</p>
      <p>This is what you have submitted: </p>
      <ul>
        <li>Name: {name}</li>
        <li>Email: {email}</li>
        <li>Comments: {comments}</li>
      </ul>
    </React.Fragment>
  );
}
