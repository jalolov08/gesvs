import React, { useState } from "react";
import InputMask from "react-input-mask";
import "./input.style.css";

export default function Input({ placeholder, label, onInputChange, type }) {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);

    if (onInputChange) {
      onInputChange(inputValue);
    }
  };

  return (
    <div className="custom_input">
      <label className="input_label">
        {label}
        <span style={{ color: "red" }}>*</span>
      </label>
      {type === "tel" && (
        <InputMask
          mask="+7 (999) 999-99-99"
          value={value}
          onChange={handleChange}
        >
          {(inputProps) => (
            <input
              className="input"
              type={type}
              placeholder={placeholder}
              {...inputProps}
            />
          )}
        </InputMask>
      )}
      {type !== "tel" && (
        <input
          className="input"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      )}
    </div>
  );
}
