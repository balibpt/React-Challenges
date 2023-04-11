import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ContactUs() {
  const [formField, setFormField] = useState({
    name: "",
    email: "",
    comments: "",
  });

  const updateFormField = (e) => {
    setFormField({
      ...formField,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  function submitForm() {
    navigate("/submitted", {
      state: {
        formData: formField,
      },
    });
  }

  return (
    <React.Fragment>
      <h1>Contact Us</h1>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={formField.name}
          name="name"
          onChange={updateFormField}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="text"
          value={formField.email}
          name="email"
          onChange={updateFormField}
        />
      </div>
      <div>
        <label>Comments:</label>
        <textarea name="comments" onChange={updateFormField}>
          {formField.comments}
        </textarea>
      </div>
      <button onClick={submitForm}>Submit</button>
    </React.Fragment>
  );
}
