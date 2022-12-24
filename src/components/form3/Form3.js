import React from "react";
import InputField from "../inputField/InputField";
import RadioInput from "../radioInput/RadioInput";
//css
// import "./css/Form3.css";

const Form3 = () => {
  return (
    <div className="Form3">
      <InputField type="text" placeholder="Field 1" label="Field 1"  />
      {/* <div className="personalInfo">
            <div className="div">
                 <InputField type='text' placeholder='John' label='First Name' />
            </div>
            <div className="div">
                 <InputField type='text' placeholder='Doe' label='Last Name' />
            </div>
        </div> */}
      <InputField type="text" placeholder="Field 2" label="Field 2" />
      <InputField type="text" placeholder="Field 3" label="Field 3" />
      <InputField
        type="text"
        placeholder="Field 4"
        label="Field 4"
      />
      <InputField
        type="text"
        placeholder="Field 5"
        label="Field 5"
      />
      <p className="gender__field__heading">
      Field 6 :
        </p>
    <div className="gender__field">
        
    
      <RadioInput type='radio' name='Gender' label='Field 6'/>
      <RadioInput type='radio' name='Gender' label='Field 6'/>
      <RadioInput type='radio' name='Gender' label='Field 6'/>
      <RadioInput type='radio' name='Gender' label='Field 6'/>
      </div>
      <div className="upload">
      <label>
        Upload an identity Proof 
        <input type="file" />
      </label>
    </div>
    </div>
  );
};

export default Form3;
