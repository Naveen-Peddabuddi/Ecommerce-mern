import React, { useState } from 'react'
import "./Register.css"
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { useDispatch, useSelector } from 'react-redux'

import { register } from '../../Redux/LoginUserData/Action';

export default function Register() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState();
  const [name, setName] = useState("")
  const [mobile, setMobile] = useState("")

  const isAuth = useSelector((store) => store.loginUserData.isAuthenticate)


  const handleRegister = (e) => {
    e.preventDefault()
    const data = {
      name: name,
      email: userEmail,
      mobile: mobile,
      password: userPassword,
    }
    console.log("dataaa", data);
    dispatch(register(data))
  }

  if (isAuth === true) {
    return navigate("/");
  }

  return (
    <div>

      <h1>Register</h1>

      <div id="registerBox">
        <div>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '45ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div id="loginHead"> Register </div>

          <TextField label="Enter Name" onChange={(e) => setName(e.target.value)} /><br /><br />
          <TextField label="Enter Email" onChange={(e) => setUserEmail(e.target.value)} /><br /><br />

          <TextField label="Enter Mobile Number" onChange={(e) => setMobile(e.target.value)} /><br /><br />

          {/* <TextField label="Enter Username" variant="filled" color="success" focused /><br /><br /> */}

          <TextField label="Enter Password" onChange={(e) => setUserPassword(e.target.value)} /> <br /><br />

          {/* <Button variant="contained">Login</Button><br /> */}

          <span><button className='ButtonDiv' onClick={(e) => handleRegister(e)} >Register</button></span>
          <span><button className='ButtonDiv' onClick={() => { navigate("/login") }}>Login</button></span><br />
        </Box>
        </div>
        
      </div>

    </div>
  )
}
