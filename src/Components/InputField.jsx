import React from "react";
import Label from "./Label";

const InputField = (props) => {
  return (
  
    <input type={props.type}placeholder={props.placeholder}value={props.value}/>

);
};

export default InputField;
