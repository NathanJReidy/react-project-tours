import React, { useState } from "react";

const Tour = ({ tour, removeTour }) => {
  const [readMore, setReadMore] = useState(true);
  const { id, image, info, name, price } = tour;

  return (
    <article className="article">
      <img className="img" src={image}></img>
      <div className="footerDiv">
        <div className="articleDesc">
          <p className="name">{name}</p>
          <p className="price">${price}</p>
        </div>
        <p className="info">
          {readMore ? info.slice(0, 200) : info}
          <a
            className="link"
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            {readMore ? "... Read More" : "... Read Less"}
          </a>
        </p>

        <button className="btn" onClick={() => removeTour(id)}>
          Not interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
