export function installShortcuts(){
  function onKey(e){
    if(e.key === 'F2'){ document.querySelector('[data-action="available"]')?.click(); }
    if(e.key === 'F3'){ document.querySelector('[data-action="wrapup"]')?.click(); }
    if(e.key === 'F4'){ document.querySelector('[data-action="break"]')?.click(); }
  }
  window.addEventListener('keydown', onKey);
  return ()=> window.removeEventListener('keydown', onKey);
}
let listeners = [];
export function showToast(msg, kind='success'){
  listeners.forEach(fn => fn({msg, kind, id: Math.random().toString(36).slice(2)}));
}
export function subscribeToasts(fn){
  listeners.push(fn);
  return ()=> {listeners = listeners.filter(f=>f!==fn)};
}
