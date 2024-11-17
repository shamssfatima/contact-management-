import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import axios from "axios";

function ContactForm({ onSave }) {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    company: "",
    jobTitle: ""
  });

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/contacts", contact);
    onSave();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField name="firstName" label="First Name" onChange={handleChange} fullWidth margin="normal" />
      <TextField name="lastName" label="Last Name" onChange={handleChange} fullWidth margin="normal" />
      <TextField name="email" label="Email" onChange={handleChange} fullWidth margin="normal" />
      <TextField name="phoneNumber" label="Phone Number" onChange={handleChange} fullWidth margin="normal" />
      <TextField name="company" label="Company" onChange={handleChange} fullWidth margin="normal" />
      <TextField name="jobTitle" label="Job Title" onChange={handleChange} fullWidth margin="normal" />
      <Button type="submit" variant="contained" color="primary">Save</Button>
    </form>
  );
}

export default ContactForm;
