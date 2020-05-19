import React from 'react';

const Card = () => {
    return(
        <div className="tc bg-light-green dib ma2 br3 pa3 ba bw1">
        <img src="https://robohash.org/test?size=200x200"/>
          <h2>Robot Name</h2>
          <h3>Id</h3>
          <p>Email</p>
        </div>
    );
}

export default Card;