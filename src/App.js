import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetch(url).then((resp) => resp.json().then((data) => setTours(data)));
    // console.log(`tours is ${tours}`);
  }, []);

  return (
    <main>
      <section className="section">
        <div className="title">
          <Loading />
          <h2>Our Tours</h2>
        </div>

        <Tours tours={tours} />
      </section>
    </main>
  );
}

export default App;
