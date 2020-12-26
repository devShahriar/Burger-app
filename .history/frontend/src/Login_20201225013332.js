import React from "react";
import { TextField, colors , Button } from "@material-ui/core";
import "./log_style.css";
const Login = () => {
  return (
    <div className="car">
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
          color="blue"
          label="Email"
          type="text"
        />
        <br></br>
        <br></br>

        <TextField
          className="input"
          id="outlined-secondary"
          label="Outlined secondary"
          variant="outlined"
          color="blue"
          label="Password"
          type="password"
        />
        <br></br>
        <br></br>
        <Button variant="contained"  style={{ width:'400px',height:'50px', backgroundColor:'#3483eb', color:'white'}} >
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;