import React from "react";
import './Destination.css';
import Main from "../Main/Main.js";
import { destinations } from "../../utils/destinations";

function Destination() {
  const [planets] = React.useState(destinations);
  const [value, setValue] = React.useState(0);

  const { name, link, description, distance, travel } = planets[value];

  return (
    <Main>
      <section className="destination">
        <h2 className="destination__title"><span className="destination__title-span-accent">01</span>pick your destination</h2>
        <div className="destination__content">
          <img className="destination__image" src={link} alt={name}/>
          <div className="destination__description">
            <ul className="destination__list">
              {planets.map((planet, index) => (
                <li key={index}>
                  <button onClick={() => setValue(index)} className={`destination__list-item ${index === value && "destination__list-item_active"}`}>{planet.name}</button>
                </li>
              ))}
            </ul>
            <article className="planet">
              <h2 className="planet__title">{name}</h2>
              <p className="planet__description">{description}</p>
              <div className="planet__info">
                <div className="planet__distance">
                  <p className="planet__paragraph-title">avg. distance</p>
                  <p className="planet__paragraph">{distance}</p>
                </div>
                <div className="planet__travel">
                  <p className="planet__paragraph-title">est. travel time</p>
                  <p className="planet__paragraph">{travel}</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </Main>
  );
};

export default Destination;