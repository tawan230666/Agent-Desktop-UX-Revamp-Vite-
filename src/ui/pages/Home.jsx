import React from 'react';
import { Button, StatusBadge } from '../components';
import { showToast } from '../shortcuts';

export default function Home(){
  const onSet = (state)=>{
    showToast(`Status changed to ${state}`, 'success');
  };
  return (
    <div className="container">
      <div className="card" style={{marginBottom:16}}>
        <h2 style={{marginTop:0}}>Primary Actions</h2>
        <div style={{display:'flex', gap:16, flexWrap:'wrap'}}>
          <Button kind="primary" data-action="available" onClick={()=>onSet('Available')}>Start (Available)</Button>
          <Button kind="secondary" data-action="wrapup" onClick={()=>onSet('Wrap-up')}>Wrap-up</Button>
          <Button kind="danger" data-action="break" onClick={()=>onSet('Break')}>Break</Button>
        </div>
        <div style={{marginTop:12, color:'#6B7280', fontSize:14}}>Shortcuts: F2=Available · F3=Wrap-up · F4=Break</div>
      </div>
      <div className="card">
        <h3 style={{marginTop:0}}>Current States</h3>
        <div style={{display:'flex', gap:8, flexWrap:'wrap'}}>
          <StatusBadge status="available" />
          <StatusBadge status="active" />
          <StatusBadge status="wrapup" />
          <StatusBadge status="break" />
          <StatusBadge status="offline" />
        </div>
      </div>
    </div>
  );
}
