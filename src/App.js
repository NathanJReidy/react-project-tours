import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  return (
    <main>
      <section className="section">
        <div className="title">
          <Loading />
          <h2>Our Tours</h2>
        </div>

        <div className="allArticles">
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
        </div>
      </section>
    </main>
  );
}

export default App;
