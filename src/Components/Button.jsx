import React from "react";

const Button = (props) => {
  console.log("props", props);
  

  const customStyle = {
    backgroundColor: props.color,
    height: props.height,
    width: props.width,
  };

  return (
    <>
      
      <button onClick={()=>(
         console.log('Click me')      
      )}
      
      style={{ ...styles,...customStyle }}> {props.title}</button>
    
    </>
  );
};

let styles = {
  fontSize: "25px",
  color: "white",
  borderRadius: 5,
  border: "1px solid rgba(0,255,0,0.3",
  padding: 10,
  margin: 10,
};

export default Button;
