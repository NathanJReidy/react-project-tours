import React, { useState } from "react";

const Tour = ({ tour }) => {
  //   console.log(tour);
  const { id, image, info, name, price } = tour;

  return (
    <article className="article">
      <img className="img"></img>
      <div className="footerDiv">
        <div className="articleDesc">
          <p>Best of Paris In 7 Days Tour</p>
          <p>$1,995</p>
        </div>
        <p></p>
        <button className="btn">Not interested</button>
      </div>
    </article>
  );
};

export default Tour;
