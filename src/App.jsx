<<<<<<< HEAD
import React, { useState } from "react";

const UserCard = ({ name, age, city, mail }) => (
  <div style={{ border: "1px solid #ccc", padding: 20, marginTop: 20 }}>
    <h3>User Info</h3>
    <p><b>Name:</b> {name || "-"}</p>
    <p><b>Email:</b> {mail || "-"}</p>
    <p><b>Age:</b> {age || "-"}</p>
    <p><b>City:</b> {city || "-"}</p>
  </div>
);

function App() {
  const [fields, setFields] = useState({ name: "", age: "", city: "", mail: "" });
  const [mode, setMode] = useState("name");
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const validate = (field, value) => {
    if (field === "age") {
      if (!/^\d*$/.test(value)) {
        return "Age must be a number";
      }
    }
      else if(field === "mail"){
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
 if (!emailRegex.test(value)) {
        return "Incorrect email!";
      }

      }
    else {
      if (value.length > 0 && value.length < 2) {
        return `${field.charAt(0).toUpperCase() + field.slice(1)} must be at least 2 characters`;
      }
    }
    return "";
  };

  const handleModeChange = (e) => {
    const newMode = e.target.value;
    setMode(newMode);
    setInputValue(fields[newMode]);
    setError("");
  };

  const handleInputChange = (e) => {
    const val = e.target.value;
    const err = validate(mode, val);
    setError(err);
    setInputValue(val);
    if (!err) {
      setFields(prev => ({ ...prev, [mode]: val }));
    }
  };

  const handleReset = () => {
    setFields({ name: "", age: "", city: "", mail:" " });
    setInputValue("");
    setError("");
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", fontFamily: "Arial, sans-serif" }}>
      <h2>User Editor</h2>

      <label>
        Select field:{" "}
        <select value={mode} onChange={handleModeChange}>
          <option value="name">Name</option>
          <option value="age">Age</option>
          <option value="city">City</option>
          <option value="mail">Mail</option>
        </select>
      </label>

      <input
        style={{ display: "block", marginTop: 10, padding: 8, width: "100%" }}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={`Enter ${mode}`}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button onClick={handleReset} style={{ marginTop: 10, padding: "8px 12px" }}>
        Reset
      </button>

      <UserCard name={fields.name} age={fields.age} city={fields.city} mail={fields.mail} />
    </div>
=======

import Board from './components/Board'

function App() {
  return (
<Board knightPosition={[0, 0]} />
>>>>>>> bfd9bae1d4120de8eb356a7f323a74e3d8f67a5e
  );
}

export default App;
