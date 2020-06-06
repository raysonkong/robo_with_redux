import React from 'react';
import Card from './Card';

const CardsList = ({robots}) => {
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