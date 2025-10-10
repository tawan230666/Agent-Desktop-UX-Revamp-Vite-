import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { installShortcuts, subscribeToasts } from './shortcuts';

function Toasts(){
  const [items, setItems] = useState([]);
  useEffect(()=>{
    const unsub = subscribeToasts((t)=>{
      setItems(prev => [...prev, t]);
      setTimeout(()=> setItems(prev => prev.filter(x=>x.id!==t.id)), 2500);
    });
    return unsub;
  },[]);
  return (
    <div className="toast-wrap">
      {items.map(t=> <div key={t.id} className={`toast ${t.kind||''}`}>{t.msg}</div>)}
    </div>
  );
}

export default function App(){
  useEffect(()=> installShortcuts(), []);
  return (
    <div>
      <div className="topbar">
        <div className="topbar-inner">
          <div className="brand">Agent Desktop — UX Revamp V2</div>
          <nav className="nav">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/compare">Compare</NavLink>
            <NavLink to="/team">Team</NavLink>
          </nav>
        </div>
      </div>
      <Outlet />
      <Toasts />
    </div>
  );
}
