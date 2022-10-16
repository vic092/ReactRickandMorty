import React from "react";

export default function Character({ c }) {
  return (
    <div className="text-center p-5">
      <h3>{c.name}</h3>
      <img src={c.image} alt={c.name} className='rounded-pill img-fluid'/>
      <p>{c.origin.name}</p>
    </div>
  );
}
