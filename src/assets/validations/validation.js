  const nameregex =/^[a-zA-Z][a-zA-Z\s]+$/;
  const emailregex = /[a-zA-Z0-9]+@(gmail|yahoo|outlook|duck)\.com/;
  const phoneregex = /^[6-9]\d{9}$/;

  function setError(e,msg){
   e.parentElement.querySelector('.statusIcon').querySelector('.MuiSvgIcon-root').style.visibility='visible';
   e.parentElement.parentElement.querySelector('.msg').innerText=msg;
   e.style.borderBottom='2px solid red'
   return false;
  }
  function setSuccess(e)
  {
    e.parentElement.querySelector('.statusIcon').querySelector('.MuiSvgIcon-root').style.visibility='hidden';
    e.style.borderBottom='2px solid green'
    e.parentElement.parentElement.querySelector('.msg').innerText=""
    return true ;
  }


  const validateName = (e) =>{
      if(e.value.trim()==='')
      {
        return setError(e,'Name cannot be blank');
      }
      else if(!nameregex.test(e.value.trim()))
      {
        return  setError(e,'Invalid name');
      }
      else 
      {
        return setSuccess(e);
      }
  }

  const validateEmail = (e) =>
  {
    if(e.value.trim()==='')
      {
        setError(e,'email cannot be blank');
      }
      else if(!emailregex.test(e.value.trim()))
      {
        setError(e,'invalid email');
      }
      else
      {
        setSuccess(e);
      }
  }

  const validatePhone = (e) =>
  {
    if(e.value.trim()==='')
    {
      setError(e,'Phone cannot be blank')
    }
    else if(!phoneregex.test(e.value.trim()))
    {
      setError(e,'Invalid phone')
    }
    else{
      setSuccess(e);
    }
  }

  export  { setError ,setSuccess,validateName ,validateEmail,validatePhone}