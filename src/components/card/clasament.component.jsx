import React from 'react'
import './clasament.styles.css';

export const Clasament = (props) => (
  
  <div className="clasament">
    <table>
      <tbody>
      <tr>
        <th>Loc</th>
        <th>Echipa</th>
        <th>Puncte</th>
        <th>GM</th>
        <th>GP</th>
        
      </tr>
      <tr>
        <td><span className="spanz">{props.echipa.loc}</span></td>
        <td className="team-name">
        <img className="flag-small"
       src={`./img/team-flag-${props.echipa.id}.png`}
       
       alt="flag"
       />
       {props.echipa.name}
       </td>
      <td>{props.echipa.puncte}</td>
       <td>{props.echipa.goluriMarcate}</td>
       <td>{props.echipa.goluriPrimite}</td>
       
      </tr>
      </tbody>
    </table>
     
    <h2 className="team-name">--</h2>
  </div>
)

