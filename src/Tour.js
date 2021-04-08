import React, { useState } from "react";

const Tour = ({ tour }) => {
  //   console.log(tour);
  const { id, image, info, name, price } = tour;

  return (
    <article className="article">
      <img className="img" src={image}></img>
      <div className="footerDiv">
        <div className="articleDesc">
          <p className="name">{name}</p>
          <p className="price">${price}</p>
        </div>
        <p>{info}</p>
        <button className="btn">Not interested</button>
      </div>
    </article>
  );
};

export default Tour;
