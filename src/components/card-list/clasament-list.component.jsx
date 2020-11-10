import React from 'react'
import { Clasament } from '../card/clasament.component';
import './clasament-list.styles.css';

export const ClasamentList = props => (
  <div className="clasament-list">

    {props.echipe.map(echipa => (
      <Clasament key={echipa.id} echipa = {echipa} />
    ))
    }

  </div>
);