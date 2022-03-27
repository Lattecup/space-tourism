import React from "react";
import './Home.css'
import Main from "../Main/Main";

function Home() {
  return (
    <Main>
      <section className="home">
        <div className="home__text">
          <h1 className="home__title">so, you want to travel to <span className="home__title-accent">space</span></h1>
          <p className="home__paragraph">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>
      <button className="home__button">explore</button>
      </section>
    </Main>
  );
};

export default Home;