import React from "react";
import Datebox from "./Datebox";
import Monthbox from "./Monthbox";
import InputField from "./InputField";
import Label from "./Label";
import Yearbox from "./Yearbox";
import Radiobutton from "./Radiobutton";

function FormComponent() {
  return (
    <form>
      <h1>Sign Up</h1>
      <p>It quick and easy</p>
      {/* TEXT BOX */}
      <div>
        <Label type="text" value="First Name" className="First" />
        <InputField type="submit" value="Submit" />
      </div>
      <div>
        <Label type="text" value="Sur Name" className="SurName" />
        <InputField type="submit" value="Submit" />
   
      </div>
      <br></br>
      <div>
        <Label type="text" value="Mobile number or E-mail" className="Mobile" />
        <InputField type="submit" value="Submit" />
   
        <label>
          <br></br>
          <Label type="password" value="new password" className="password" />
          <InputField type="submit" value="Submit" />
      
        </label>
      </div>
      <br></br>
      
      {/* SELECTBOX */}
      <h4>Date of Birth</h4>
      <Datebox type="select" value="date" />
      <Monthbox type="select" value="months" />
      <Yearbox type="select" value="years" />

      <h3>Gender?</h3>

      {/* RADIOBUTTON */}
      Male
      <Radiobutton type="radio" value="Male" name="gender" />
      Female
      <Radiobutton type="radio" value="Female" name="gender" />
      other
      <Radiobutton type="radio" value="other" name="gender" />
    </form>
  );
}

export default FormComponent;
