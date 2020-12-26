import React, { useState } from "react";
import { TextField, colors , Button } from "@material-ui/core";
import Axios from 'axios'
import "./log_style.css";
const Login = () => {
const [email, setEmail] = useState('')
const [password , setPassword] = useState('') 
 const formSubmit =(e)=>{
    e.preventDefault()
    Axios({
        url: "http://localhost:9000/check/",
        method: "post",
        data: {
          // sending user email and password
         // email: email,
       //   password: password,
        },
      }).then(()=>{
        localStorage.setItem('authTrue' , "true")
        
      })

 }

  return (
    
      <form className="login">
        <div
          style={{
            alignContent: "center",
            color: "white",
            fontStyle: "bold",
          }}
        >
          {" "}
          Welcome back!
        </div>
        <br></br>
        <TextField
          className="input"
          id="outlined-secondary"
          label="Outlined secondary"
          variant="outlined"
          color="green"
          label="Email"
          type="text"
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
        />
        <br></br>
        <br></br>

        <TextField
          className="input"
          id="outlined-secondary"
          label="Outlined secondary"
          variant="outlined"
          color="green"
          label="Password"
          type="password"
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
        />
        <br></br>
        <br></br>
        <Button variant="contained"  style={{ width:'400px',height:'50px', backgroundColor:'#3483eb', color:'white'}} 
         onClick={formSubmit}>
          Login
        </Button>
      </form>
   
  );
};

export default Login;