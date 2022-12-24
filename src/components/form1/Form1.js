import { Error } from "@mui/icons-material";
import React,{useContext} from "react";
import userContext from "../../context/user/userContext";
import { validateEmail, validateName, validatePhone } from "../../assets/validations/validation";
//css
import "./css/Form1.css";

const Form1 = () => {
  const user = useContext(userContext) ;

  return (
    <div className="form1">
      <label className="input__label">
        <div className="label__text">Name :<span className="mandatory">*</span></div>
        <div className="input__grp">
          <div className="input__div">
            <input
              className="input name"
              type="text"
              placeholder="Enter your name here"
              value={user.state.name}
              onChange={(e)=>{validateName(e.target) ; user.setState({...user.state , name:e.target.value, form1:1}) ;} }
            />
            <div className="statusIcon">
              <Error />
            </div>
          </div>

          <div className="input__status">
            <div className="msg"></div>
          </div>
        </div>
      </label>

      <label className="input__label">
        <div className="label__text">Email :<span className="mandatory">*</span></div>
        <div className="input__grp">
          <div className="input__div">
            <input
              className="input email"
              type="email"
              placeholder="Enter your email here"
              value={user.state.email}
              onChange={(e)=>{user.setState({...user.state , email:e.target.value,form1:2});validateEmail(e.target)}}
            />
            <div className="statusIcon">
              <Error />
            </div>
          </div>

          <div className="input__status">
            <div className="msg"></div>
          </div>
        </div>
      </label>

      <label className="input__label">
        <div className="label__text">Phone :<span className="mandatory">*</span></div>
        <div className="input__grp">
          <div className="input__div">
            <input
              className="input phone"
              type="number"
              placeholder="Enter your phone number"
              value={user.state.phone}
              onChange={(e)=>{user.setState({...user.state , phone:e.target.value,form1:3}); validatePhone(e.target)}}
            />
            <div className="statusIcon">
              <Error />
            </div>
          </div>

          <div className="input__status">
            <div className="msg"></div>
          </div>
        </div>
      </label>

      <label className="input__label">
        <div className="label__text">Father's Name :<span className="mandatory">*</span></div>
        <div className="input__grp">
          <div className="input__div">
            <input
              className="input fatherName"
              type="text"
              placeholder="Father Name"
              value={user.state.fatherName}
              onChange={(e)=>{validateName(e.target); user.setState({...user.state , fatherName:e.target.value,form1:4})}}
            />
            <div className="statusIcon">
              <Error />
            </div>
          </div>
          <div className="input__status">
            <div className="msg"></div>
          </div>
        </div>
      </label>

      <label className="input__label">
        <div className="label__text">Address :</div>
        <div className="input__grp">
          <div className="input__div">
            <input
              className="input address"
              type="text"
              placeholder="Enter your address here"
              value={user.state.Address}
              onChange={(e)=>{user.setState({...user.state , Address:e.target.value})}}
            />
            <div className="statusIcon">
              <Error />
            </div>
          </div>

          <div className="input__status">
            <div className="msg"></div>
          </div>
        </div>
      </label>

      <p className="gender__field__heading">Choose your gender :</p>
      <div className="gender__field">
        <label className=" radio__label">
        Male
        <input type="radio" name="Gender" value={'Male'}/>
        </label>
        <label className="radio__label">
        Female
        <input type="radio" name="Gender" value={'Female'}/>
        </label>
        <label className="radio__label">
        Other
        <input type="radio" name="Gender" value={'Other'}/>
        </label>
        <label className="radio__label">
        Prefer not to say
        <input type="radio" name="Gender" value={'Not Said'}/>
        </label>
        
      </div>

      {/* <div className="upload">
        <label className="input__label">
        <div className="label__text"> Upload an identity Proof : <input  className="fileInput" type="file" /></div>
        </label>
      </div> */}

    </div>
  );
};

export default Form1;
