import React from "react";

export interface Props {
  value: string | number;
  onChange: (_: any) => any;
  name: string;
  type?: string;
  className?: string;
  errors?: object;
  label?: string;
}

const Input = (props: Props) => {
  return (
    <div
      className={`form__control ${props.className || ""} ${
        props.errors ? "form__control--invalid" : ""
      }`}
    >
      <input
        className="form__input"
        type={props.type || "text"}
        value={props.value}
        placeholder=" "
        name={props.name}
        onChange={props.onChange}
      />
      <label htmlFor={props.name}>{props.label}</label>
      {props.errors && (
        <div className="form__errors fade-in">{props.errors}</div>
      )}
    </div>
  );
};

export default Input;
