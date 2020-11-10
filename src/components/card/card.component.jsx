import React from 'react'
import './card.styles.css';
import { Link } from 'react-router-dom';



export const Card = (props) => (
 <Link to={`/lotul/${props.echipa.id}`}> <div className='card-container'>
      
      <img className="flag"
       src={`./img/team-flag-${props.echipa.id}.png`}
       
       alt="flag"
       />
      <h1> 
         {props.echipa.name}
         
     </h1>
      
  </div>
  </Link>
);