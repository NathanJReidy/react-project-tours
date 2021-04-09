import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);
  const [title, setTitle] = useState("Our Tours");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(url).then((resp) =>
      resp.json().then((data) => {
        setTours(data);
        setIsLoading(false);
      })
    );
  }, []);

  return (
    <main>
      <section className="section">
        <div className="title">
          <h2>{isLoading ? <Loading /> : title}</h2>
        </div>

        <Tours tours={tours} setTours={setTours} setTitle={setTitle} />
      </section>
    </main>
  );
}

export default App;
