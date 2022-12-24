import React,{useContext} from 'react'
import userContext from "../../context/user/userContext";
import './css/Profile.css'
function Profile() {
  const user = useContext(userContext) ;

  return (
    <div className="profile">
      <h1> User Details</h1>

        {Object.keys(user.state).map((key, index) => {
            return (
              <div key={index}>
                <div className='node'>
                  <span>{key.toUpperCase()} :</span> {user.state[key]}
                </div>
    
             
              </div>
            );
          })}
                   
        
             
     
    
    </div>
    
  )
}

export default Profile