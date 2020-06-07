import React from 'react';
import Card from './Card';

const CardsList = ({robots}) => {
    {
      /*
        if (true) {
            throw new Error("Not good!!");
        }
      */
    }
    const cardsArray = robots.map(robot => {
        return <Card key={robot.id} robot={robot}/>
    })
    return (
        <div>   
          {cardsArray}
        </div>
    );
}

export default CardsList;