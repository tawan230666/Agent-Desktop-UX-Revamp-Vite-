import React, { useState } from 'react';
import { Button, StatusBadge } from '../components';
import { showToast } from '../shortcuts';

const ACTIONS = [
  { key: 'available', label: 'Start (Available)', kind: 'primary', shortcut: 'F2' },
  { key: 'wrapup', label: 'Wrap-up', kind: 'secondary', shortcut: 'F3' },
  { key: 'break', label: 'Break', kind: 'danger', shortcut: 'F4' },
];

export default function Home(){
  const [status, setStatus] = useState('offline');
  const [history, setHistory] = useState([]);

  const onSet = (next) => {
    if (next === status) return;
    setStatus(next);
    setHistory((h) => [{ status: next, at: new Date() }, ...h].slice(0, 5));
    showToast(`Status changed to ${ACTIONS.find((a) => a.key === next)?.label ?? next}`, 'success');
  };

  return (
    <div className="container">
      <div className="card" style={{marginBottom:16}}>
        <h2 style={{marginTop:0}}>Primary Actions</h2>
        <div style={{display:'flex', gap:16, flexWrap:'wrap'}}>
          {ACTIONS.map((a) => (
            <Button
              key={a.key}
              kind={a.kind}
              data-action={a.key}
              aria-pressed={status === a.key}
              aria-keyshortcuts={a.shortcut}
              onClick={() => onSet(a.key)}
            >
              {a.label}
            </Button>
          ))}
        </div>
        <div style={{marginTop:12, color:'#6B7280', fontSize:14}}>Shortcuts: F2=Available · F3=Wrap-up · F4=Break</div>
      </div>

      <div className="card">
        <h3 style={{marginTop:0}}>Your status</h3>
        <div style={{display:'flex', alignItems:'center', gap:12}}>
          <StatusBadge status={status} />
          <span style={{color:'#6B7280', fontSize:14}}>
            {history[0] ? `since ${history[0].at.toLocaleTimeString()}` : 'not started yet'}
          </span>
        </div>
        {history.length > 0 && (
          <ul style={{marginTop:12, paddingLeft:18, color:'#6B7280', fontSize:14}}>
            {history.map((h, i) => (
              <li key={i}>{h.at.toLocaleTimeString()} — <StatusBadge status={h.status} /></li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
