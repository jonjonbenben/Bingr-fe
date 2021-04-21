import React, { useState } from "react";
import { Link } from "@reach/router";

const HostFilter = (props) => {
  //console.log(props);

  const [providers, setProviders] = useState({
    netflix: false,
    amazon: false,
    disney: false,
  });

  const handleChange = (provider, checked) => {
   
   setProviders((prevState)=> {
    const newState = {...prevState}
    newState[provider] = checked
    return newState
   })
   console.log(providers)
  };

  

  return (
    <div>
      <h1>{`Welcome to Bingr ${props.name}`}</h1>

      <form>
        <h2>What are you watching on?</h2>

        <input onChange={(e)=> handleChange(e.target.id, e.target.checked)} type="checkbox" id="netflix" name="netflix" value="netflix" />
        <label htmlFor="netflix">Netflix</label>
        <br />
        <input onChange={(e)=> handleChange(e.target.id, e.target.checked)} type="checkbox" id="amazon" name="amazon" value="amazon" />
        <label htmlFor="amazon">Amazon Prime</label>
        <br />
        <input onChange={(e)=> handleChange(e.target.id, e.target.checked)} type="checkbox" id="disney" name="disney" value="disney" />
        <label htmlFor="disney">Disney</label>

        <h2>Categories</h2>
        <p>Most Popular</p>
        <Link to={`/waitingroom/${props.name}`}>
          <button>Create Room</button>
        </Link>
      </form>
    </div>
  );
};

export default HostFilter;
