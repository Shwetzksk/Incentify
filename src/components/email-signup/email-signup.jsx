import React, { useState } from "react";
import styles from "./_email-signup.module.scss";
import { emailSignup } from "../../firebase.js";

function EmailSignup(props) {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    const { value } = e.target;
    setEmail(value);
  }
  async function handleSubmit() {
    if (!success) {
      const x = await emailSignup(email);
      setSuccess(x);
    }
  }
  return (
    <div className={`${styles.emailSignup}`}>
      <input
        placeholder="Enter email for early access"
        value={email}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>
        {(!success && "Apply") || "Applied!"}
      </button>
    </div>
  );
}

export default EmailSignup;
