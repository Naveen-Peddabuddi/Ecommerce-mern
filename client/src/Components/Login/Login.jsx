import React, { useState, useEffect} from 'react'
import "./Login.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../Redux/LoginUserData/Action';

export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [useeremail, setUseremail] = useState("");
  const [password, setPassword] = useState("");

  const isAuth = useSelector((store) => store.loginUserData.isAuthenticate)
  console.log("home nav ", isAuth)
  
  const handleAdd = (e) => {
    e.preventDefault()
    const data = {
      "email": useeremail,
      "password": password
    }
    console.log(useeremail)
    dispatch(login(data));
  }

  if (isAuth === true) {
    return navigate("/");
  }

  return (
    <div>
      
      <div id="loginBox">
        <div>
          <div>
          <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '45ch' },
          }}
          noValidate
          autoComplete="off"
        >

          <div><h1>Login</h1></div>
          <TextField label="Email"  onChange={(e) => setUseremail(e.target.value)} /><br /><br />

          <TextField label="Password" onChange={(e) => setPassword(e.target.value)} /> <br /><br />

          <span><button className='ButtonDiv' variant="contained" onClick={(e) => handleAdd(e)} >Login</button></span>
          <span><button  className='ButtonDiv' variant="contained" onClick={() => { navigate("/register") }} >Register</button></span><br />

        </Box>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}
