import React, { useState } from "react";
import formConfig from "./FormConfig.json";
import "./FormStyle.css"; // Import the CSS file

const DynamicForm = () => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const validateField = (field, value) => {
    const { required, minLength, validationMessage } = field;
    if (required && !value) {
      return validationMessage;
    }
    if (minLength && value.length < minLength) {
      return validationMessage;
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: fieldValue,
    });

    const fieldConfig = formConfig.find((field) => field.name === name);
    if (fieldConfig) {
      const errorMessage = validateField(fieldConfig, fieldValue);
      setErrors({
        ...errors,
        [name]: errorMessage,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;
    const newErrors = {};

    formConfig.forEach((field) => {
      const value = formData[field.name];
      const errorMessage = validateField(field, value);
      if (errorMessage) {
        valid = false;
        newErrors[field.name] = errorMessage;
      }
    });

    setErrors(newErrors);

    if (valid) {
      alert(JSON.stringify(formData, null, 2));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {formConfig.map((field) => (
        <div key={field.name}>
          <label>
            {field.label}:
            {field.type === "text" ||
            field.type === "email" ||
            field.type === "password" ? (
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name] || ""}
                onChange={handleChange}
              />
            ) : null}
            {field.type === "radio"
              ? field.options.map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name={field.name}
                      value={option}
                      checked={formData[field.name] === option}
                      onChange={handleChange}
                    />
                    {option}
                  </label>
                ))
              : null}
            {field.type === "checkbox" ? (
              <input
                type="checkbox"
                name={field.name}
                checked={formData[field.name] || false}
                onChange={handleChange}
              />
            ) : null}
            {field.type === "select" ? (
              <select
                name={field.name}
                value={formData[field.name] || ""}
                onChange={handleChange}
              >
                <option value="">Select...</option>
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : null}
            {errors[field.name] && (
              <div style={{ color: "red" }}>{errors[field.name]}</div>
            )}
          </label>
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;
