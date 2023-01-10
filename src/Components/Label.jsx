import React from "react";
import InputField from "./InputField";

const Label = (props) => {
  return (
    <label className={props.className}>
      {props.value}
      <InputField type={props.type} placeholder={props.value} />
    </label>
  );
};

export default Label;
