import React from "react";
import "./index.css";
function Email() {
  return (
    <div className="emil-container">
      <label htmlFor="email">email</label>
      <input type="email" id="email" className="input" />
      <button>invite</button>
    </div>
  );
}

export default Email;
