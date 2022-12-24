import { Error } from "@mui/icons-material";
import React , {useContext} from "react";
import userContext from "../../context/user/userContext";
//css
import "../../App.css";
// import "../../components/form1/css/Form1.css";

const Form2 = () => {
  const user = useContext(userContext) ;
  return (
    <div className="form1">

<label className="input__label">
        <div className="label__text">College/University :</div>
        <div className="input__grp">
          <div className="input__div">
            <input
              className="input"
              type="text"
              placeholder="Enter your college here"
              value={user.state.college}
              onChange={(e)=>{user.setState({...user.state , college:e.target.value})}}
              
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
        <div className="label__text">Course Persued :</div>
        <div className="input__grp">
          <div className="input__div">
            <input
              className="input"
              type="text"
              placeholder="Enter your course here"
              value={user.state.course}
              onChange={(e)=>{user.setState({...user.state , course:e.target.value})}}
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

      <p className="gender__field__heading">Status of degree program :</p>
      <div className="gender__field">
        <label className=" radio__label">
        Passed
        <input type="radio" name="degree" value={'Passed'}/>
        </label>
        <label className="radio__label">
        Fail
        <input type="radio" name="degree" value={'Fail'}/>
        </label>
        <label className="radio__label">
        Ongoing
        <input type="radio" name="degree" value={'Ongoing'}/>
        </label>
       
        
      </div>

      <label className="input__label">
        <div className="label__text">School :</div>
        <div className="input__grp">
          <div className="input__div">
            <input
              className="input"
              type="text"
              placeholder="Enter your school here"
              value={user.state.school}
              onChange={(e)=>{user.setState({...user.state , school:e.target.value})}}
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
        <div className="label__text">Address of School :</div>
        <div className="input__grp">
          <div className="input__div">
            <input
              className="input"
              type="text"
              placeholder="Enter address here"
              value={user.state.schoolAddress}
              onChange={(e)=>{user.setState({...user.state , schoolAddress:e.target.value})}}
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
        <div className="label__text">Name of board :</div>
        <div className="input__grp">
          <div className="input__div">
            <input
              className="input"
              type="text"
              placeholder="CBSE / ICSE / Others"
              value={user.state.board}
              onChange={(e)=>{user.setState({...user.state , board:e.target.value})}}
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

      <div className="stream">
        <p>Stream :</p>
        <select onChange={(e)=>{user.setState({...user.state, stream:e.target.options[e.target.selectedIndex].value})}}>
        {/* <select onChange={(e)=>{console.log(e.target.options[e.target.selectedIndex].value) }}> */}
          <option  value={0}>Select</option>
          <option value={"PCMB"}>PCMB</option>
          <option value={"PCM"}>PCM</option>
          <option value={"PCB"}>PCB</option>
          <option value={"Commmerce"}>Commmerce</option>
          <option value={"Arts"}>Arts</option>
          <option value={"Others"}>Others</option>
        </select>
      </div>


      <p className="gender__field__heading">Status of school program :</p>
      <div className="gender__field">
        <label className=" radio__label">
        Passed
        <input type="radio" name="school" value={'Passed'}/>
        </label>
        <label className="radio__label">
        Fail
        <input type="radio" name="school" value={'Fail'}/>
        </label>
        <label className="radio__label">
        Ongoing
        <input type="radio" name="school" value={'Ongoing'}/>
        </label>
       
        
      </div>

      {/* <div className="upload">
        <label className="input__label">
        <div className="label__text"> Upload marksheet: <input  className="fileInput" type="file" /></div>
        </label>
      </div> */}

    </div>
  );
};

export default Form2;
