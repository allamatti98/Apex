import React from "react";
import { accessUrl } from "./spotify";
import logo from './static/img/Apexicon.png';
import apex from './static/img/sportbg.png';

function Login() {
  return (
    <div className="login">
      <div style={{marginTop:"10%"}}>
        <img style={{height:"90px"}} src={logo} alt=""/>
        <img style={{height:"90px"}} src={apex} alt=""/>
      </div>
      <a href={accessUrl}>Login to Continue</a>
    </div>
  );
}

export default Login;
