import React from 'react';
export default function Button({kind='primary', children, ...props}){
  return <button className={`btn ${kind}`} {...props}>{children}</button>;
}
