import React from 'react';
import StatusBadge from './StatusBadge';
export default function AgentCard({name, status, callsToday, avgHandle}){
  return (
    <div className="card">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center', marginBottom:8}}>
        <strong>{name}</strong>
        <StatusBadge status={status} />
      </div>
      <div className="kv"><span>Calls today:</span><b>{callsToday}</b></div>
      <div className="kv"><span>Avg handle:</span><b>{avgHandle}</b></div>
    </div>
  );
}
