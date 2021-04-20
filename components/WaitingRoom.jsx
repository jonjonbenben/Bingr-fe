import React from 'react';

import { codeGenerator } from '../codeGenerator';

const WaitingRoom = (props) => {
  console.log(props, 'IN WAITING ROOM');
  return (
    <div>
      <h1>Your code is.....{codeGenerator()}</h1>
      <h1>{props.name}</h1>
      <button>Start</button>
    </div>
  );
};

export default WaitingRoom;
