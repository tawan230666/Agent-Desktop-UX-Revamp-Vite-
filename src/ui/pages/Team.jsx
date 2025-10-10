import React from 'react';
import { AgentCard } from '../components';

const agents = [
  {name:'Nok Suriyawong', status:'available', callsToday:18, avgHandle:'04:12'},
  {name:'Golf P.', status:'active', callsToday:22, avgHandle:'03:58'},
  {name:'Mint T.', status:'wrapup', callsToday:15, avgHandle:'05:10'},
  {name:'Beam R.', status:'break', callsToday:9, avgHandle:'04:45'},
];
export default function Team(){
  return (
    <div className="container">
      <div className="grid grid-3">
        {agents.map((a,i)=>(<AgentCard key={i} {...a} />))}
      </div>
    </div>
  );
}
