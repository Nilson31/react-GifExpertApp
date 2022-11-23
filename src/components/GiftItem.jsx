import React from "react";

export const GiftItem = ({title,imagen}) => {
  return (
    <div className="card">     
      <img src={imagen.url}alt={title} />
      <p>{title}</p>
    </div>
  );
};
