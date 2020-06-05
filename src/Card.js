import React from 'react';

const Card = ({robot}) => {
    return(
        <div className="tc bg-light-green dib ma2 br3 pa3 ba bw1 grow">
        <img src={`https://robohash.org/${robot.name}?size=200x200`} alt='robot'/>
          <h2>{robot.name}</h2>
          <h3>{robot.id}</h3>
          <p>{robot.email}</p>
        </div>
    );
}

export default Card;