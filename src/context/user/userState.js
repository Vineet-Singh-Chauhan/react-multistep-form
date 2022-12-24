import { useState } from "react";
import userContext from "./userContext";

const UserState =  (props) =>
{
    const user = {
        form1:false,
        name:"",
        email:"",
        phone:"",
        fatherName:"",
        Address:"",
        gender:"",
        id:"",
        college:"",
        course:"",
        courseStatus:"",
        school:"",
        schoolStatus:"",
        schoolAddress:"",
        board:"",
        stream:"",
        marksheet:""
    }
    const [state,setState] = useState(user);
    return (
        <userContext.Provider  value={{state, setState}}>
            {props.children}
        </userContext.Provider>   
        )
}
export default UserState;