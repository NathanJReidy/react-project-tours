import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, setTours }) => {
  //   console.log(tours);

  return (
    <>
      <div className="allArticles">
        {tours.map((tour) => {
          //   const { id, image, info, name, price } = tour;
          return (
            <Tour key={tour.id} tour={tour} setTours={setTours} tours={tours} />
          );
        })}
      </div>
    </>
  );
};

export default Tours;
