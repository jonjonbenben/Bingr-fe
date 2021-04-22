import React from 'react';
import { navigate } from '@reach/router';

const WaitingRoom = (props) => {
  console.log(props.movieList, 'IN WAITING ROOM');

  return (
    <div>
      <h1>Your code is {props.roomCode}</h1>
      <h1>{props.name}</h1>
      <button
        onClick={() => {
          navigate('/moviecard');
        }}
      >
        Start
      </button>
    </div>
  );
};

export default WaitingRoom;
