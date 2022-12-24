import "./App.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Form1 from "./components/form1/Form1";
import React,  { useState , useContext} from "react";
import { ArrowForward } from "@mui/icons-material";
import Form2 from "./components/form2/Form2";
import userContext from "./context/user/userContext";
import { useNavigate } from "react-router-dom";


function App() {
  
  const navigate = useNavigate()
  const [stage, setStage] = useState(0);
  const titles = ["Personal Information", "Educational Qualifications", "Stage 3", "Stage 4"];
  const stages = [<Form1 />, <Form2 />];
  const user = useContext(userContext) ;

function getGender(e)
{
  document.getElementsByName('Gender').forEach((e)=>{
    if(e.checked)
    {
      user.setState({...user.state , gender:e.value});
    }
  })
}

function getDegreeStatus(e)
{
  document.getElementsByName('degree').forEach((e)=>{
    if(e.checked)
    {
      user.setState({...user.state , courseStatus:e.value});
    }
  })
}
function getSchoolStatus(e)
{
  document.getElementsByName('school').forEach((e)=>{
    if(e.checked)
    {
      user.setState({...user.state , schoolStatus:e.value});
    }
  })
}
function submitForm(){
  console.log(user.state);
  navigate('/user')
}
  const deliverStage = () => {
    return stages[stage];
  };


  

  return (
   
    <div className="app__body">
      <div
        className="app__progressbar"
        style={{ width: `${((stage + 1) / stages.length) * 100}%` }}
      ></div>

      <form className="app__formHolder">
        <div className="form__top">
          {/* back icon */}
          {stage !== 0 ? (
            <div
              onClick={(e) => {
                e.preventDefault();
                setStage(stage - 1);
              }}
              className="form__top__backBtn"
            >
              <ArrowBackIcon />
            </div>
          ) : (
            ""
          )}
          <div className="form__heading">
            Multi-step form 
          </div>
          {stage !== stages.length - 1 ? (
            <div
              onClick={(e) => {
                e.preventDefault();
                setStage(stage + 1);
              }}
              className="form__top__forwardBtn"
            >
              <ArrowForward />
            </div>
          ) : (
            ""
          )}
          
        </div>
        <div className="form__stageInfo">{titles[stage]}</div>
        <div className="form__body">
          {/* <Form1/> */}
          {deliverStage()}
        </div>
        <div className="form__bottom">
          <button
            onClick={(e) => {
              e.preventDefault();
              setStage(stage - 1);
            }}
            className="backBtn"
            disabled={stage === 0 ? true : false}
            type="submit"
          >
            Back
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              if(stage===0)
              {
                getGender(e);
           
                setStage(stage + 1);
              }
              else if(stage===1)
              {
                getDegreeStatus(e);
                getSchoolStatus(e);
                submitForm();
              }
            }}
            className="nextBtn"
            disabled={user.state.form1!==4}
            type={"submit"}
          >
            {stage === stages.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </form>
    </div>
  
  );
}

export default App;
