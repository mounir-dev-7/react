import React, { useState } from "react";
import validator from "validator";

const App = () => {
  const [password, setPassword] = useState("");

  const isStrong = validator.isStrongPassword(password, {
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  });

  const hasInput = password.length > 0;
  const feedbackMessage = isStrong ? "Strong Password" : "Weak Password";
  const feedbackColor = isStrong ? "green" : "red";

  return (
    <div style={containerStyle}>
      <h2>Checking Password Strength in ReactJS</h2>
      
      <label htmlFor="password-input" style={labelStyle}>
        Enter Password:
      </label>
      <input
        id="password-input"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={inputStyle}
      />

      {hasInput && (
        <p style={{ ...feedbackStyle, color: feedbackColor }}>
          {feedbackMessage}
        </p>
      )}
    </div>
  );
};

const containerStyle = {
  padding: "40px",
  maxWidth: "400px",
  margin: "0 auto",
  fontFamily: "sans-serif",
};

const labelStyle = {
  display: "block",
  marginBottom: "8px",
  fontWeight: "600",
};

const inputStyle = {
  width: "100%",
  padding: "8px",
  marginBottom: "16px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  boxSizing: "border-box",
};

const feedbackStyle = {
  fontWeight: "bold",
  margin: "8px 0 0 0",
};

export default App;