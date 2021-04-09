import React, { useState, useEffect } from "react";

const Tour = ({ tour, setTours, tours, setTitle }) => {
  //   console.log(tour);
  const [readText, setReadText] = useState("... Read More");
  const [readMore, setReadMore] = useState(true);

  const { id, image, info, name, price } = tour;

  const removeArticle = (id) => {
    const newArticles = tours.filter((tour) => tour.id !== id);
    setTours(newArticles);
    // console.log(newArticles.length);
    if (newArticles.length === 0) {
      setTitle("No Tours Left");
    }
  };

  // useEffect(() => {
  //   // console.log(newArticles.length);
  //   if (newArticles.length === 0) {
  //     setTitle("No Tours Left");
  //   }
  // });

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
              if (readText == "... Read More") {
                setReadText("... Read Less");
              } else {
                setReadText("... Read More");
              }
            }}
          >
            {readText}
          </a>
        </p>

        <button className="btn" onClick={() => removeArticle(id)}>
          Not interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
