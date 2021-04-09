import React, { useState } from "react";

const Tour = ({ tour, setTours, tours }) => {
  console.log(tour);
  const { id, image, info, name, price } = tour;

  const removeArticle = (id) => {
    const newArticles = tours.filter((tour) => tour.id !== id);
    setTours(newArticles);
  };

  return (
    <article className="article">
      <img className="img" src={image}></img>
      <div className="footerDiv">
        <div className="articleDesc">
          <p className="name">{name}</p>
          <p className="price">${price}</p>
        </div>
        <p className="info">{info}</p>
        <button className="btn" onClick={() => removeArticle(id)}>
          Not interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
