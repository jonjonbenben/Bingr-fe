import React, { useState, useEffect } from "react";
import HostFilter from "./HostFilter";
import { Link, navigate } from "@reach/router";
import logo from "../public/logo.png";
import "../public/app.css";

const Login = (props) => {
  return (
    <section className="login-page">
      <img className="login-logo" src={logo} alt="logo"></img>
      <form
        className="login"
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/hostfilter");
        }}
      >
        <input
          placeHolder="Enter name"
          onChange={(e) => {
            props.setName(e.target.value);
          }}
          type="text"
        ></input>
        <br />
        <button className="button">Host</button>
        <br />

        <p>OR</p>
        <br />

        <input
          placeHolder="Enter name"
          onChange={(e) => {
            props.setName(e.target.value);
          }}
          type="text"
        ></input>
        <br />
        <input placeHolder="Enter room code" type="text"></input>
        <br />
        <button className="button">Join</button>
        <br />
      </form>
    </section>
  );
};

export default Login;
