import React from "react";
import './Crew.css';
import Main from "../Main/Main.js";
import { crews } from '../../utils/crew';

function Crew() {

  const [crew] = React.useState(crews);
  const [value, setValue] = React.useState(0);

  const { name, link, role, bio } = crew[value];

  return (
    <Main>
      <section className="crew">
        <h2 className="crew__title"><span className="crew__title-span-accent">02</span>meet your crew</h2>
        <div className="crew__content">
          <div className="crew__description">
            <article className="persons">
              <p className="persons__role">{role}</p>
              <h2 className="persons__name">{name}</h2>
              <p className="persons__bio">{bio}</p>
            </article>
            <ul className="crew__list">
              {crew.map((person, index) => (
                <li key={index}>
                  <button onClick={() => setValue(index)} className={`crew__list-item ${index === value && "crew__list-item_active"}`} />
                </li>
              ))}
            </ul>
          </div>
          <img className="crew__image" src={link} alt={name} />
        </div>
      </section>
    </Main>
  );
};

export default Crew;