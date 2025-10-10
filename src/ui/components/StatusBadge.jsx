import React from 'react';
const LABEL = {available:'Available', active:'Active', wrapup:'Wrap-up', break:'Break', offline:'Offline'};
export default function StatusBadge({status='offline'}){
  return <span className={`badge ${status}`}>{LABEL[status]||status}</span>;
}
