import { Error } from "@mui/icons-material";
import React ,{useContext} from "react";
import userContext from "../../context/user/userContext";

//css
// import "./css/InputField.css";

function InputField(props) {
  const a = useContext(userContext) ;
  return (
 
    <div className="input__holder" data-width={props.width}>
      <label className="input__label">
        <div className="label__text">

        {props?.label} :
        </div>
        <div className="input__grp">
          <input
            className="input"
            type={props?.type}
            // placeholder={props?.placeholder}
            placeholder={a?.name}
          />
          <div className="input__status">
            <div className="msg">Error</div>
            <div className="statusIcon">
                <Error/>
            </div>
          </div>
        </div>
      </label>
    </div>
  );
}

export default InputField;
