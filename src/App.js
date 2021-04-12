import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);
  const [title, setTitle] = useState("Our Tours");
  const [isLoading, setIsLoading] = useState(true);

  // Alternate way of fetching data from the API:
  // useEffect(() => {
  //   fetch(url)
  //     .then((resp) => resp.json())
  //     .then((json) => {
  //       setTours(json);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => console.log(`Error: ${error}`));
  // }, []);

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setIsLoading(false);
      setTours(tours);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
    if (newTour.length === 0) {
      setTitle("No Tours Left");
    }
  };

  return (
    <main>
      <section className="section">
        <div className="title">
          <h2>{isLoading ? <Loading /> : title}</h2>
          {tours.length === 0 && isLoading === false && (
            <button className="btn" onClick={() => fetchTours()}>
              Refresh
            </button>
          )}
        </div>

        <Tours tours={tours} removeTour={removeTour} />
      </section>
    </main>
  );
}

export default App;
