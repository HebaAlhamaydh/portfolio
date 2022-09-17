import React from "react";
import "./portfolio.css";
import HiService from "../../assets/5.png";
import Store from "../../assets/3.png";
 import Auth from "../../assets/4.png";
import RESTy from "../../assets/2.png";
import chattApp from "../../assets/1.png";


const data = [
  {
    id: 1,
    image: HiService,
    title: "Hi-service",
    github: "https://github.com/ART-OF-CODING-JS/Hi-service",
    demo: "https://github.com/ART-OF-CODING-JS/Hi-service",
  },
  {
    id: 2,
    image: Store,
    title: "Store",
    github: "https://github.com/HebaAlhamaydh/storefront",
    demo: "https://storefront-eight-sand.vercel.app/",
  },
  
  {
    id: 3,
    image: Auth,
    title: "Auth api",
    github: "https://github.com/HebaAlhamaydh/auth-api",
    demo: "https://heba-auth-api.herokuapp.com/",
  },
  {
    id: 4,
    image: RESTy,
    title: "RESTy",
    github: "https://github.com/HebaAlhamaydh/resty",
    demo: "https://hebaalhamaydh.github.io/resty/",
  },
  {
    id: 5,
    image: chattApp,
    title: "HEADER LAMP",
    github: "https://github.com/HebaAlhamaydh/chattApp/tree/main/chatroom",
    demo: "https://github.com/HebaAlhamaydh/chattApp/tree/main/chatroom",
  },

  
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Project's</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key = {id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;


