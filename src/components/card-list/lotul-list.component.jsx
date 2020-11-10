import React from 'react'
import {LotulCard} from '../card/lotul.component';

import './card-list.styles.css';


export const LotulCardList = props => (

   <div className="card-list"> 
   
      {props.players.map(player => (
        <LotulCard key={player.id} player={player} />
        ))
      }
    
   </div>
);