import React from "react";
import './Technology.css';
import Main from "../Main/Main.js";
import { technologies } from "../../utils/technologies";

function Technology() {
  const [technology] = React.useState(technologies);
  const [value, setValue] = React.useState(0);

  const { name, link, image, description } = technology[value];

  return (
    <Main>
      <section className="technology">
        <h2 className="technology__title"><span className="technology__title-span-accent">03</span>space launch 101</h2>
        <div className="technology__content">
          <div className="technology__description">
            <ul className="technology__list">
              {technology.map((technology, index) => (
                <li key={index}>
                  <button onClick={() => setValue(index)} className={`technology__list-item ${index === value && "technology__list-item_active"}`}>{technology.number}</button>
                </li>
              ))}
            </ul>
            <article className="terminology">
              <p className="terminology__paragraph">the terminology…</p>
              <h2 className="terminology__title">{name}</h2>
              <p className="terminology__text">{description}</p>
            </article>
          </div>
          <img className="technology__image" src={link} alt={name} />
          <img className="technology__image-landscape" src={image} alt={name}/>
        </div>
      </section>
    </Main>
  );
};

export default Technology;