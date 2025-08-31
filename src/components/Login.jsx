import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/usersSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constant';


const Login = () => {

    const [emailId,setEmailId]=useState("");
    const [password,setPassword]=useState("");
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [isLoginForm,setIsLoginForm]=useState(true);
    const [error,setError]=useState("");
    const dispatch=useDispatch();
    const navigate = useNavigate();

   const handleLogin= async ()=>{
   try {const res=await axios.post(
     BASE_URL +"/login",
     {
    emailId,
    password,
   },
    {withCredentials:true}
);

dispatch(addUser(res.data))
return navigate("/");
}
   catch(err){
    setError(err?.response?.data || "something went wronge");
   }
   };

    const handleSignUp= async ()=>{
   try {const res=await axios.post(
     BASE_URL +"/signup",
     {
      firstName,
      lastName,
    emailId,
    password,
   },
    {withCredentials:true}
);
dispatch(addUser(res.data.data))
return navigate("/profile");
}
   catch(err){
    setError(err?.response?.data || "something went wronge");
   }
   };

  return (
    <div className='flex justify-center items-center my-10'>
        <div className="card card-border bg-base-300 w-96">
          <div className="card-body">
         <h2 className="card-title justify-center">{isLoginForm ? "Login" : "SignUp"}</h2>
          <div>

{!isLoginForm && (
  <>
<fieldset className="fieldset">
  <legend className="fieldset-legend ">First Name</legend>
  <textarea 
  className="input input-bordered w-full max-w-xs"
  value={firstName}
  onChange={(e)=>setFirstName(e.target.value)}
   ></textarea>
 </fieldset>

<fieldset className="fieldset">
  <legend className="fieldset-legend ">Last Name</legend>
  <textarea 
  className="input input-bordered w-full max-w-xs"
  value={lastName}
  onChange={(e)=>setLastName(e.target.value)}
   ></textarea>
 </fieldset>
 </>
) 
}

<fieldset className="fieldset">
  <legend className="fieldset-legend ">Email ID</legend>
  <textarea 
  className="input input-bordered w-full max-w-xs"
  value={emailId}
  onChange={(e)=>setEmailId(e.target.value)}
   ></textarea>
 </fieldset>

 <fieldset className="fieldset">
  <legend className="fieldset-legend ">Password</legend>
  <input
   className="input input-bordered w-full max-w-xs" 
   type="password"
   value={password}
   onChange={(e)=>setPassword(e.target.value)}
   ></input>
 </fieldset>

          </div>
          <p className='text-red-500'>{error}</p>
         <div className="card-actions justify-center">
          <button className="btn btn-primary" onClick={isLoginForm ? handleLogin : handleSignUp}>
            {isLoginForm ? "Login" : "SignUp"}
          </button>
    </div>
    <p className="m-auto cursor-pointer py-2" onClick={()=>setIsLoginForm((value)=>!value)}>
      {isLoginForm ? "Don't have an account?" : "Already have an account?"} 
      </p>
  </div>
</div>
</div>
    
  )
}
export default Login