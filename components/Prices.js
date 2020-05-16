import Layout from '../components/Layout'
import { useState } from 'react';

function Prices(props) {
  const [currency, setCurrency] = useState('USD')
  // console.log(props.bpi)
  return (
    <div>
      <select className="form-control" onChange={e=>{setCurrency(e.target.value)}}>
        {Object.keys(props.bpi).map(item=>(<option key={item}>{item}</option>))}
      </select>
      <ul className="list-group">
        <li className="list-group-item">
          Bitcoin rate for {props.bpi[currency].description}
          : <span className="badge badge-primary">{props.bpi[currency].code}</span>
          <strong>{props.bpi[currency].rate}</strong>
        </li>
      </ul>
    </div>
  );
}

export default Prices;