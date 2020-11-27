import React from 'react';
import './CardList.css';
import Card from './Card'


 
const CardList = ({robots}) => {
    const cardArray = robots.map((robot) => {
      return <Card key={robot.id} id={robot.id} name={robot.name} username={robot.username} email={robot.email} />
    });
    return (
      <div className="CardList">
        {cardArray}
      </div>
    );
  }

 
export default CardList;