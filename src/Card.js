import React from 'react';
import { bounceIn } from 'react-animations'

import './Card.css'
const Card = ({ id, name, username, email }) => {
	return(
		

		<div className="Card bounceIn">
			<h2>{name}</h2>
			<img src={`https://robohash.org/${id}`} alt="imagen-robot" className="Card-img" />
			<h3> {username} </h3>
			<p> {email} </p>
		</div>
 

		);
}

export default Card;