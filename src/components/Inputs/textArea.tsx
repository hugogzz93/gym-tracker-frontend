import React from "react";

export interface Props {
  type?: string;
  value: string;
  onChange: (e: object) => any;
  className?: string;
  errors?: object;
  minHeight?: number;
  name: string;
  label: string;
}

const TextArea = (props: Props) => {
  return (
    <div
      className={`form__control ${props.className || ""} ${
        props.errors ? "form__control--invalid" : ""
      }`}
    >
      <textarea
        className="form__input"
        value={props.value}
        name={props.name}
        onChange={props.onChange}
        placeholder=" "
        style={{ minHeight: props.minHeight }}
      />
      <label htmlFor={props.name}>{props.label}</label>
    </div>
  );
};

export default TextArea;
