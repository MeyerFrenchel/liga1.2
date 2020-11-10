import React from 'react'
import {Card} from '../card/card.component';

import './card-list.styles.css';


export const CardList = props => (

   <div className="card-list"> 
   
      {props.echipe.map(echipa => (
        <Card key={echipa.id} echipa={echipa} />
        ))
      }
    
   </div>
);
