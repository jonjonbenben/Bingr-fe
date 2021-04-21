import React, { useState, useEffect } from "react";
import HostFilter from "./HostFilter";
import { Link, navigate } from "@reach/router";

const Login = (prop) => {
  return (
    <section>
      <h1>Bingr!!!!</h1>

      <form>
        <input
          onChange={(e) => {
            prop.updateName(e.target.value);
          }}
          type="text"
        ></input>
        <button>SubmitName</button>
      </form>

      <Link to={`/hostfilter`}> Host </Link>

      <button>Join Game</button>
    </section>
  );
};

export default Login;
