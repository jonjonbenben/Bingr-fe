import React from 'react';
import { navigate } from '@reach/router';

import { codeGenerator } from '../codeGenerator';

const WaitingRoom = (props) => {
  console.log(props.movieList, 'IN WAITING ROOM');

  return (
    <div>
      <h1>Your code is.....{codeGenerator()}</h1>
      <h1>{props.name}</h1>
      <button
        onClick={() => {
          navigate('/movieslist');
        }}
      >
        Start
      </button>
    </div>
  );
};

export default WaitingRoom;
