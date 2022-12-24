import { Error } from '@mui/icons-material'
import React from 'react'
// import './css/RadioInput.css'
const RadioInput = (props) => {
  return (
    <div className="radio__holder" data-width={props.width}>
      <label className="radio__label">
        <div className="radio__label__text">

        {props?.label} :
        </div>
        <div className="radio__grp">
          <input
            className="radio__input"
            type={props?.type}
            placeholder={props?.placeholder}
            name={props.name}
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
  )
}

export default RadioInput